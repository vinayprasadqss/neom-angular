// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = 'https://search2-api.brightquery.com/api/user_managementz';
  // private apiUrl = '/api/auth/login';


  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = {
      user_email: username,
      password: password,
      matrix: "admin_login",
    };

    return this.http.post(this.apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true 
    });
  }

  otp(username: string): Observable<any> {
    const body = {
      user_email: username,
      matrix: "admin_login",
      path: "otp_page",
      OTP: Number("23456"),
    };

    return this.http.post(this.apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true 
    });
  }


}
