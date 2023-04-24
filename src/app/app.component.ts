import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'anguard';
  
  constructor(private userService: UserService, private httpClient : HttpClient) {}

  getApi() {
    this.userService.getFromApi();
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
