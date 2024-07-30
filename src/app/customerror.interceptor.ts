import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class CustomErrorInterceptor implements HttpInterceptor {
  constructor(private route:Router){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResponse:HttpErrorResponse) => {
        if(errorResponse.status==401){
          console.log("ürün bulunamadı");
        }
        return throwError(() => errorResponse.error);
      })
    );
  }
}
