import { Request, Response } from 'express';
import { ClsService } from 'nestjs-cls';
import { SessionRedis } from 'src/session/model/session.redis';
import { SessionService } from 'src/session/session.service';
import { UserModel } from 'src/user/model/user.model';
import { UserService } from 'src/user/user.service';

export class RequestContext {
  protected static _clsService: ClsService;
  private readonly _req: Request;
  private readonly _res: Response;
  private readonly _sessionService: SessionService;
  private readonly _userService: UserService;

  constructor(options: RequestContextOptions) {
    const { req, res, sessionService, userService } = options;

    this._req = req;
    this._res = res;
    this._sessionService = sessionService;
    this._userService = userService;
  }

  static getRequestContext(): RequestContext {
    return RequestContext._clsService.get(RequestContext.name);
  }

  static getRequest(): Request {
    return RequestContext.getRequestContext()._req;
  }

  static getResponse(): Response {
    return RequestContext.getRequestContext()._res;
  }

  static async getSession(): Promise<SessionRedis | null> {
    const ctx = RequestContext.getRequestContext();
    const sessionToken = ctx.extractSessionToken();
    if (!sessionToken) return null;
    return ctx._sessionService.findSessionByToken(sessionToken);
  }

  static async getPlayer(): Promise<UserModel | null> {
    const ctx = RequestContext.getRequestContext();
    const session = await RequestContext.getSession();
    if (!session) return null;
    return await ctx._userService.findOneById(session.userId);
  }

  static setClsService(clsService: ClsService): void {
    RequestContext._clsService = clsService;
  }

  private extractSessionToken(): string | null {
    const signedCookies = this._req.signedCookies as Record<
      string,
      string | undefined
    >;
    return signedCookies['_act_'] ?? null;
  }
}

type RequestContextOptions = {
  req: Request;
  res: Response;
  sessionService: SessionService;
  userService: UserService;
};
