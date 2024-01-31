import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[FormsModule,MatSnackBarModule],
  standalone:true
})
export class LoginComponent {

  loginObj:any={
    username:"",
    password:""
  }
  constructor(private route:Router,private api:LoginService,private snackbar:MatSnackBar){}
  
  login(){
    this.api.getuserNameAndPassword(this.loginObj.username,this.loginObj.password).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length>0){
          this.api.invalidUser.emit(false);
          this.route.navigateByUrl('food/home');
          localStorage.setItem("logindata",JSON.stringify(data));
          this.snackbar.open("You are logged in successfully","ok",{duration:3000})
        }
        else{
          this.api.invalidUser.emit(true);
          this.api.invalidUser.subscribe(
            (result)=>{
              if(result){
                console.warn("wrong password");
              }}
          )
        }
      },
      (error:any)=>{
        console.warn(error);
      }
    )
  }
  register(){
    this.route.navigateByUrl('/register')
  }
}
