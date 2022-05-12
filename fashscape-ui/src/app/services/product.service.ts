import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://localhost:44322/Product';
  url1='https://localhost:44322/';

  constructor(private http:HttpClient) { }

  addProduct(data:any){
    return this.http.post(this.url,data);
  }

  getProducts(){
    return this.http.get<Product[]>(`${this.url}`);
  }

  getProductByName(name: string){
    return this.http.get<any>(`${this.url1}getByName?productName=${name}`);
  }

  getProductById(id: number){
    return this.http.get<any>(`${this.url1}getById?productId=${id}`);
  }
}
