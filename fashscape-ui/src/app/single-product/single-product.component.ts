import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product!: Product ;
    constructor(  private route: ActivatedRoute,
    private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.getProduct();
    
  }

  getProduct(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.productService.getProductByName(name)
      .subscribe(product => this.product = product);
  }

  add(){

  }
}
