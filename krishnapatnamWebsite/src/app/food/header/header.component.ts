import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[],
  standalone:true
})
export class HeaderComponent {
  constructor(private route :Router){}
  logout(){
    this.route.navigateByUrl('/');
    localStorage.removeItem("logindata");
  }
  home(){
    this.route.navigateByUrl('food/home');
  }
  about(){
    this.route.navigateByUrl('food/about');
  }
  menu(){
    this.route.navigateByUrl('food/menu')
  }
  contact(){
    this.route.navigateByUrl('food/contact')
  }
}
