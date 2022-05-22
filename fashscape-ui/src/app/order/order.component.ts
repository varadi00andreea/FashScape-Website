import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup(
      {
        "firstName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
        "lastName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
        "address": new FormControl(null, Validators.required),
        "phoneNumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
        "email": new FormControl(null, [Validators.required, Validators.email])
      }
    );
    
  }

  complete(){
    console.log(this.orderForm.value);
    if(this.orderForm.get('firstName')?.value==null || this.orderForm.get('lastName')?.value==null 
    || this.orderForm.get('address')?.value==null || this.orderForm.get('phoneNumber')?.value==null 
    || this.orderForm.get('email')?.value==null) {
      Swal.fire({ icon: 'error', title: 'Ups!', text: 'Please complete the form'});

    }
    else {
      Swal.fire({ icon: 'success', title: 'Yay!', text: 'Thank you for your Order'});
      setTimeout(() => {
        console.log('sleep');
        this.router.navigate(['']);
      }, 2000);
    }
  
  }

}
