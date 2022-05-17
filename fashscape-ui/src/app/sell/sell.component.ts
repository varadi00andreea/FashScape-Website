import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sellForm: any;
  sellNumber: any;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.sellForm = new FormGroup(
      {
        "name": new FormControl('', Validators.required),
        "description": new FormControl('', Validators.required),
        "price": new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
        "size": new FormControl('', Validators.required)

      }
    );
    this.sellNumber = Math.floor(Math.random() * (3500 - 1 + 1)) + 1;
  }

  submit() {
    if (this.sellForm != null) {
      this.product.addProduct(this.sellForm.value).subscribe((result) => {
        console.log(result)
      });
      Swal.fire({ icon: 'success', title: 'Thank you!', text: 'One more step!' });
    }
    else {
      Swal.fire('Please complete the form.');
    }
  }

}
