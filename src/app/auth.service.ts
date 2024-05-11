import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token); // Store JWT token in local storage
        })
      );
  }
  
  logout(): void {
    localStorage.removeItem('token'); // Remove JWT token from local storage
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Retrieve JWT token from local storage
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Check if token exists
  }
}
