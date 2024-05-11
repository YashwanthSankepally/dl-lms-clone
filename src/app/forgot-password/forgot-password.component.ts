import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

  goTo() {
    this.router.navigate(['sign-in']);
  }

}
