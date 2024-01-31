import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadComponent:()=>import('../user/login/login.component').then(
      Component=>Component.LoginComponent
    )
  },
  {
    path:"register",
  loadComponent:()=>import('../user/register/register.component').then(
    Component=>Component.RegisterComponent
  )  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
