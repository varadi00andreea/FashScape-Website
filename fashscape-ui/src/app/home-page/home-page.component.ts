import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loginForm: any;
  registerForm: any;
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        "username":new FormControl('', Validators.required),
        "passwsord": new FormControl('', Validators.required)
      }
    );
    this.registerForm=new FormGroup(
      {
        "username":new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required),
        "firstName": new FormControl('', Validators.required),
        "lastName": new FormControl('',Validators.required),
        "address": new FormControl('',Validators.required),
        "phoneNumber": new FormControl('',Validators.required),
        "email":new FormControl('',Validators.required)
        
      }
    );
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
