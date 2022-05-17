import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserDTO } from '../models/userDTO';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:44322/User'
  url1 = 'https://localhost:44322/'

  constructor(private http: HttpClient) { }

  saveUserData(data: any) {
    return this.http.post(this.url, data);
  }

  updatePassword(userData: UserDTO, password: string) {
    return this.http.post(`${this.url1}changePassword?Username=${userData.Username}&Password=${userData.Password}&newPassword=${password}`, { userData, password }, { responseType: 'text' });
  }
}
