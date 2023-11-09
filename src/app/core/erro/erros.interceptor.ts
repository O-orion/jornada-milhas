import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorMessage = 'Ocorreu um erro desconhecido';

        // error ocorrendo do lado do cliente
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Erro do cliente: ${error.error.message}`

        } else if (error.status === 404) {
          errorMessage = 'Recurso não encontrado!'

        } else if (error.status === 500) {
          errorMessage = 'Error interno do servidor!'
          
        } else if (error.status === 401) {
          errorMessage = 'Permissão negada! Você não possui autorização para acessar este recurso.'
        }

        console.error(error)
        console.log(errorMessage)

        return throwError(() => new Error('Ops, ocorreu um erro!'))
      })
    );
  }
}
