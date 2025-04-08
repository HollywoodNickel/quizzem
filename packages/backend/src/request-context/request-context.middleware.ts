import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ClsService } from 'nestjs-cls';
import { RequestContext } from 'src/request-context/request-context';
import { SessionService } from 'src/session/session.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(
    private readonly clsService: ClsService,
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.clsService.run(() => {
      const ctx = new RequestContext({
        req,
        res,
        userService: this.userService,
        sessionService: this.sessionService,
      });
      this.clsService.set(RequestContext.name, ctx);
      next();
    });
  }
}
