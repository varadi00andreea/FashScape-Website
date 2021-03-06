import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  product!: Product;
  
  constructor(private route: ActivatedRoute,
    private productService: ProductService, private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.productService.getProductByName(name)
      .subscribe(product => {
        this.product = product
      });
  }

  add() {
    console.log(this.product);
    this.cartService.addToCart(this.product).subscribe(rez => console.log(rez));
    Swal.fire({ icon: 'success', title: 'Yay!', text: 'Product Added To Your Cart.' });
  }

  goBack() {
    this.router.navigate(['/buy']);
  }

}
