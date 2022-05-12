import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'https://localhost:44322/Cart'
  constructor(private http:HttpClient) { }

  addToCart(data:any){
    return this.http.post(this.url,data);
  }
}
