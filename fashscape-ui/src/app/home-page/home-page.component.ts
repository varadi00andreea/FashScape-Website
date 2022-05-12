import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loginForm: any;
  registerForm: any;
  accountCreated = false;
  registered = true;
  constructor(private user: UserService, private http: HttpClient, private router: Router) { }

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
        "firstName": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
        "lastName": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
        "address": new FormControl('', Validators.required),
        "phoneNumber": new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
        "email": new FormControl('', [Validators.required, Validators.email])
      }
    );
  }

  logIn() {
   this.http.get<any>("https://localhost:44322/User")
   .subscribe(res=>{
     const user=res.find((a:any)=>{
       return a.username===this.loginForm.value.username && a.password===this.loginForm.value.password
     });
     if(user){
       Swal.fire({  icon: 'success',  title: 'Yay!',  text: 'Login Success'});
       this.router.navigate(['/make-your-choice']);
     }else{
       Swal.fire({  icon: 'question',  title: 'Oops...',  text: 'User not found!'});
     }
   })
  }

  newUser() {
    this.registered = !this.registered;
  }

  register() {
    if (this.registerForm.value != null) {
      this.user.saveUserData(this.registerForm.value).subscribe((result) => {
        console.log(result)
      });
      Swal.fire( {icon: 'success',  title: 'Great!',  text: 'Your account has been created!'});
      this.accountCreated = !this.accountCreated;
      this.registerForm.reset();
    }
    else {
      Swal.fire('Please complete the form.')
    }
  }

  signIn() {
    this.registered = !this.registered;
  }

}
