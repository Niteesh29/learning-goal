
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'

//Interceptor is nothing but a service only which implements HttpInterceptor
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let modifiedRequest = req.clone({
            //we can not pass new headers rather we can append new headers to the existing headers
            //modifying headers
            headers: req.headers.append('auth', 'abc'),

            //modifing params
            params: req.params.append('hey', 'helloworld')

        })
        return next.handle(modifiedRequest)
    }
}