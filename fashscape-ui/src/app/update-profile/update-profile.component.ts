import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserDTO } from '../models/userDTO';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  registerForm: any;
  user!: UserDTO;
  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        "username": new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required),
        "newPassword": new FormControl('', Validators.required),
        "newPasswordRepetead": new FormControl('', Validators.required)
      }
    );
  }

  update() {
    if (this.registerForm.value != null) {
      if (this.registerForm.get('newPassword')?.value == this.registerForm.get('newPasswordRepetead')?.value) {
        this.userService.updatePassword(
          {
            Username: this.registerForm.get('username')?.value,
            Password: this.registerForm.get('password')?.value
          } as UserDTO,
          this.registerForm.get('newPassword')?.value).
          subscribe();
        Swal.fire({ icon: 'success', title: 'Done!', text: 'Your password has changed!' });
      }
    }
    else {
      Swal.fire({ icon: 'error', title: 'Upsss!', text: 'Something is not right. Please be careful when you complete the form.' });
    }

  }

  goBack() {
    this.router.navigate(['/make-your-choice']);
  }

}
