import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  productList!: Product[];
  labels!:string[];

  constructor(private productService: ProductService){
 
  }
  
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.productService.getProducts().subscribe(list => this.productList=list);
  }



}
