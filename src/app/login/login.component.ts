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
    // this.authService.login(this.form.value).subscribe(
    //   () => {
    //     this.router.navigate(['dashboard']);
    //   },
    //   (error) => {
    //     console.error(error);
    //     // Handle error (e.g., show error message)
    //   }
    // );
    this.router.navigate(['dashboard']);
  }

  forgotPassword() {
    this.router.navigate(['forgot-password'])
  }

  toggleHide() {
    this.hide = !this.hide;
  }
}
