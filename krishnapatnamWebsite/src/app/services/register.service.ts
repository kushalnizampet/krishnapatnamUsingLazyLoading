import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  postData(data:any){
    return this.http.post(`${baseUrl}/register`,data);
  }

  getData(){
    return this.http.get(`${baseUrl}/register`);
  }


}
