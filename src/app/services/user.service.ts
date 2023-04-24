import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  login(): Observable<boolean> {
    return of(false).pipe(delay(3000));
  }

  private role: string = 'USER';

  getRole(): string {
    return this.role;
  }

  getFromApi() {
    this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts`);
  }
  getData() {
    // Création de l'observable
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      // Abonnement à l'observable (et donc déclenchement de la requête)
      .subscribe((data: any) => {
        // Réponse du serveur
        console.log(data);
      });
  }

}
