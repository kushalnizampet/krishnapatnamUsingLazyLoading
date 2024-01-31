import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path:"home",
    loadComponent:()=>import('../food/home/home.component').then(
      Component=> Component.HomeComponent
    ),canActivate:[AuthGuard]
  },
  {
    path:"header",
    loadComponent:()=>import('../food/header/header.component').then(
      Component=> Component.HeaderComponent
    )
  },
  {
    path:"about",
    loadComponent:()=>import('../food/about-us/about-us.component').then(
      Component=> Component.AboutUsComponent
    ),canActivate:[AuthGuard]
  },
  {
    path:"menu",
    loadComponent:()=>import('../food/menu/menu.component').then(
      Component => Component.MenuComponent
    ),canActivate:[AuthGuard]
  },
  {
    path:"contact",
    loadComponent:()=>import('../food/contact-us/contact-us.component').then(
      Component => Component.ContactUSComponent
    ),canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { 

}
