import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'https://localhost:44322/Cart';
  url1='https://localhost:44322/';
  constructor(private http:HttpClient) { }

  addToCart(id: any){
    return this.http.post(this.url,id);
  }

  getProductsFromCart(){
    return this.http.get<Product[]>(`${this.url}`);
  }

  getCart(){
    return this.http.get<Cart[]>(`${this.url1}getCart`);
  }

  deleteFromCart(id: any){
    return this.http.delete(`${this.url1}Cart?id=${id}`, {responseType: 'text'});
  }
}
