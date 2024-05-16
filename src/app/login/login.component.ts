import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide:boolean = true;

  constructor(private formBuilder: FormBuilder, private router:Router, private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value ?? ''; // Default to empty string if null
      const password = this.form.get('password')?.value ?? ''; // Default to empty string if null
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password); // Note on security as mentioned before
  
      this.router.navigate(['dashboard']);
    } else {
      this.form.markAllAsTouched(); // Show form validation errors
    }
  }

  forgotPassword() {
    this.router.navigate(['forgot-password'])
  }

  toggleHide() {
    this.hide = !this.hide;
  }
}
