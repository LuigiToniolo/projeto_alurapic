import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpUserEvent } from '@angular/common/http';
import { HttpProgressEvent, HttpRequest, HttpSentEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpSentEvent
  | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>> {

    if(this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          'x-access-token': token
        }
      });
    }
    return next.handle(req);
  }
}

