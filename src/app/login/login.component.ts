import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide:boolean = true;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['dashboard']);
  }

  forgotPassword() {
    this.router.navigate(['forgot-password'])
  }

  toggleHide() {
    this.hide = !this.hide;
  }
}
