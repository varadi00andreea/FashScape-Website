import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loginForm: any;
  registerForm: any;
  registered = true;
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        "username": new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required)
      }
    );
    this.registerForm = new FormGroup(
      {
        "username": new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required),
        "firstName": new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "lastName": new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "address": new FormControl('', Validators.required),
        "phoneNumber": new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
        "email": new FormControl('', [Validators.required,Validators.email])
      }
    );
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  newUser() {
    this.registered = !this.registered;
  }
  
  register(){
    this.user.saveUserData(this.registerForm.value).subscribe((result)=>{
      console.log(result)
    });
  }

}
