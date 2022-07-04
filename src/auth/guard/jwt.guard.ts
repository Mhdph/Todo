import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { Constans } from 'src/user/utils/constans';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    for (let x = 0; x < Constans.BY_PASS_URLS.length; x++) {
      if (request.url == Constans.BY_PASS_URLS[x]) return true;
    }
    return super.canActivate(context);
  }
}
