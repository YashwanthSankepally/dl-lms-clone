import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string = 'johndoe@gmail.com'
  userEmail:string = 'johndoe@gmail.com'
  firstLetters:string = 'JD'

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['sign-in']);
  }

  updateProfile() {
    this.router.navigate(['update-profile']);
  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }

}
