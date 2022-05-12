import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProductsList!: Product[];
  cart!: Cart[];
  id!: number;

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getCartProducts();
    this.getCart();
  }

  getCartProducts(){
    this.cartService.getProductsFromCart()
    .subscribe((list) => {
      this.cartProductsList=list
    });
  }

  getCart(){
    this.cartService.getCart()
    .subscribe(list => this.cart=list);
  }

  deleteItem(id:any){
    this.cart.forEach(element => {
      if(element.productId==id){
        id=element.id;
      }      
    });
    this.delete(id);
    Swal.fire({  icon: 'success',  title: 'Done!',  text: 'Product Removed From Cart.'});
    window.location.reload();
  }

  delete(id:any){
    this.cartService.deleteFromCart(id).subscribe();
  }

  release(){
    this.cart.forEach(element => {
      this.cartProductsList.forEach(e => {
        if(element.productId==e.id){
          this.delete(element.id);
        }
      })
    })
    Swal.fire({  icon: 'success',  title: 'Thank You!',  text: 'Order Complete'});
    window.location.reload();
  }




}
