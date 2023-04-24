import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecuredComponentComponent } from './secured-component/secured-component.component';
import { NotsecuredComponent } from './notsecured/notsecured.component';
import { HomePageComponent } from './challenge/home-page/home-page.component';
import { DashboardComponent } from './challenge/dashboard/dashboard.component';
import { AdminPageComponent } from './challenge/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SecuredComponentComponent,
    NotsecuredComponent,
    HomePageComponent,
    DashboardComponent,
    AdminPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
