import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PricesComponent } from './components/prices/prices.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent 
  },{
   path: 'home',
   component:HomeComponent 
 },
 {
   path: "aboutus",
   component:AboutUsComponent
 },
 {
   path: "prices",
   component:PricesComponent
 },
 {
   path: "login",
   component:LoginComponent
 },
 {
   path: "register",
   component:RegisterComponent
 },
 {​​
  path: '**', 
  component: NotFoundComponent
}​​
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [NotFoundComponent]
})
export class AppRoutingModule { }
