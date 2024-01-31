import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FocusMonitor, ListKeyManager } from '@angular/cdk/a11y';
import {A11yModule} from '@angular/cdk/a11y';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:true,
  imports:[FormsModule,MatSnackBarModule,MatFormFieldModule,A11yModule,MatInputModule,MatSelectModule]
})
export class RegisterComponent {
  keyManager:any;
  registerObj:any={
    name:"",
    mobile:"",
    username:"",
    password:""
  }
  constructor(private route:Router,private api:RegisterService,private snackbar:MatSnackBar,private focusMonitor :FocusMonitor){}
  @ViewChild('formElement') element:ElementRef | any ;
  @ViewChildren('formElementChild') elementChild : QueryList<any> | any
  
  @HostListener('window:keyup', ['$event'])
  keyFunc(event:any){
    if(event.code !== 'Tab'){
      this.keyManager.onKeydown(event)
      this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement,"keyboard")
    }
    else{
      this.keyManager.onKeydown(event)
      this.keyManager.setNextItemActive()
    }
  }
  ngOnInit():void{

  }

  ngAfterViewInit(){
    this.keyManager = new ListKeyManager(this.elementChild);
    this.keyManager.withHorizantalOrientation('ltr');
    this.keyManager.withWrap();
  }
  login(){
    this.route.navigateByUrl("/")
  }

  submitData(){
    this.api.postData(this.registerObj).subscribe(
      (data:any)=>{
        console.log(data);
        this.snackbar.open("You are registered successfully","ok",{duration:3000})
      },
      (error:any)=>{
        console.warn(error);
      }
    )
  }
}
