import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredComponentComponent } from './secured-component/secured-component.component';
import { AuthGuard } from './code/auth.guard';
import { NotsecuredComponent } from './notsecured/notsecured.component';
import { HomePageComponent } from './challenge/home-page/home-page.component';
import { AdminPageComponent } from './challenge/admin-page/admin-page.component';
import { DashboardComponent } from './challenge/dashboard/dashboard.component';
import { IsAdminGuard } from './code/is-admin.guard';
import { IsConnectedGuard } from './code/is-connected.guard';

const routes: Routes = [
  {
    path: 'secured',
    component: SecuredComponentComponent,
    canActivate: [AuthGuard],
  },
  { path: 'notsecured', component: NotsecuredComponent },
  {path : 'home-page', component: HomePageComponent},
  {path : 'dashboard', component: DashboardComponent, canActivate:[IsConnectedGuard]},
  {path : 'admin-page', component: AdminPageComponent, canActivate:[IsAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
