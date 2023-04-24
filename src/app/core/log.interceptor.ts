import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor(public userService: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const startTime: Date = new Date();

    console.log(req.urlWithParams);
    // pipe permet d'ajouter des actions à effectuer quand l'observable est résolue
    return next.handle(req).pipe(
      // tap est un observable qui indique : "Je fais des actions sans modifier la réponse"
      tap((response) => {
        
        // On s'assure qu'il s'agit bien d'une réponse http
        if (response instanceof HttpResponse) {
          console.log("response" , response,);
          
          console.log((new Date().valueOf() - startTime.valueOf()) / 1000);

          // Ici sera le code exécuté à la réponse du serveur
          // Dans le cas où tout s'est bien passé
        }
      })
    );
  }
}
