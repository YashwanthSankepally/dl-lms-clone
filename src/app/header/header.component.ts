import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string = ''
  userEmail:string = ''
  firstLetters:string = ''
  userProfileImage: string | File = 'path/to/default/image';

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail') || '';
    this.userName = this.userEmail; // Assuming userName is the email for simplicity
    this.firstLetters = this.getUserNameInitials(this.userEmail);
    this.loadThemePreference();
  }

  getUserNameInitials(email: string): string {
    return email
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  }

  logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword'); // Clearing the password
    this.router.navigate(['']);
  }

  updateProfile() {
    this.router.navigate(['update-profile']);
  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }

  admin() {
    this.router.navigate(['admin'])
  }

  toggleTheme(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    document.body.classList.toggle('dark-mode', isChecked);
    this.saveThemePreference(isChecked);
  }

  saveThemePreference(isDarkMode: boolean) {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }

  loadThemePreference() {
    const theme = localStorage.getItem('theme');
    const isDarkMode = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);
    const themeToggle = document.getElementById('flexSwitchCheckDefault') as HTMLInputElement;
    if (themeToggle) {
      themeToggle.checked = isDarkMode;
    }
  }

}
