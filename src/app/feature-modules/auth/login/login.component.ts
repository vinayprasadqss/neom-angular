import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  // OTP submission method
  onOtpSubmit() {
    this.authService.otp(this.username).subscribe({
      next: (response) => {
        console.log('OTP Response:', response); // Handle successful OTP
        localStorage.setItem('token', response.token); // Store token if API returns it
        this.router.navigate(['/dashboard']); // Navigate to dashboard
      },
      error: (err) => {
        console.error('OTP Error:', err); // Handle OTP submission error
        this.invalidLogin = true; // Show error message
      }
    });
  }

  // Login form submission method
  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login Response:', response); // Handle successful login
        // Assuming login is successful, call OTP submission
        this.onOtpSubmit(); // Call OTP submission
      },
      error: (err) => {
        console.error('Login Error:', err); // Handle login error
        this.invalidLogin = true; // Show error message for login
      }
    });
  }
}
