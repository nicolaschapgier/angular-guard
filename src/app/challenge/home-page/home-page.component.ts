import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  httpClient: any;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.userService.getData();
  }

}
