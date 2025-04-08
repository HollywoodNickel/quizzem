import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { RefreshTokenDto } from 'src/auth/dto/refresh-token.dto';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { TokenPayloadDto } from 'src/auth/dto/token-payload.dto';
import { RequestContext } from 'src/request-context/request-context';
import { SessionService } from 'src/session/session.service';
import { UserModel } from 'src/user/model/user.model';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepo: Repository<UserModel>,
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  async signIn(data: SignInDto): Promise<void> {
    const user = await this.userService.findOneByUserName(data.userName);
    if (!user) {
      throw new NotFoundException();
    }

    const passwordMatches = await bcrypt.compare(data.password, user.password);
    if (!passwordMatches) {
      throw new ForbiddenException();
    }

    const { accessToken, refreshToken } = await this.generateAccessTokens(user);

    user.refreshToken = refreshToken;
    await this.userRepo.save(user);

    this.setTokenCookies(accessToken, refreshToken);
  }

  async signUp(data: SignUpDto): Promise<void> {
    const user = await this.userService.create(data);

    const { accessToken, refreshToken } = await this.generateAccessTokens(user);
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    await this.userRepo.update(user.id, { refreshToken: hashedRefreshToken });

    this.setTokenCookies(accessToken, refreshToken);
  }

  async signOut(): Promise<void> {
    const session = await RequestContext.getSession();
    if (!session) {
      throw new NotFoundException();
    }

    await this.sessionService.remove(session);
    await this.sessionService.persistInDb(session);
    // TODO remove refreshtoken
  }

  refreshToken(data: RefreshTokenDto): void | PromiseLike<void> {
    throw new Error(`Method not implemented. ${JSON.stringify(data)}`);
  }

  async authenticated(): Promise<boolean> {
    const session = await RequestContext.getSession();
    if (!session) return false;
    return this.sessionService.validateSession(session);
  }

  private async generateAccessTokens(
    user: UserModel,
  ): Promise<TokenPayloadDto> {
    const session = await this.sessionService.createSession(user);
    return await this.sessionService.createSessionTokens(session);
  }

  private setTokenCookies(accessToken: string, refreshToken: string): void {
    const res = RequestContext.getResponse();

    const cookieOptions = { httpOnly: true, path: '/', signed: true };

    res.cookie('_act_', accessToken, cookieOptions);
    res.cookie('_rft_', refreshToken, cookieOptions);
  }
}
