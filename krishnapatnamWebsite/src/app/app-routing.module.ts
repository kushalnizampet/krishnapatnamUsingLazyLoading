import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",
loadChildren:() => import('../app/user/user.module').then(
  module => module.UserModule
)
},
{
  path:"food",
  loadChildren:()=>import('../app/food/food.module').then(
    module=>module.FoodModule
  )
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
