import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='https://localhost:44322/User'
  constructor(private http:HttpClient) { }
  saveUserData(data:any){
    console.log(data);
    return this.http.post(this.url,data);
  }
}
