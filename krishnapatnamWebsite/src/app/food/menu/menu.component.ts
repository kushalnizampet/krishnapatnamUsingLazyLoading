import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {  ScrollingModule } from '@angular/cdk/scrolling';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports:[HeaderComponent,FooterComponent,ScrollingModule],
  standalone:true
})
export class MenuComponent {
  images:any=[]
  constructor(private api:DataService){}
  ngOnInit(){
    this.getImgData()
  }

  getImgData(){
    this.api.getData().subscribe(
      (data:any)=>{
        this.images=data;
        console.log(data);
      }
    )
  }
}
