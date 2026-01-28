import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private API = 'http://localhost:3000/auth';

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.API}/login`, { email, password });
  }

  register(data: { email: string; password: string; name: string }) {
    return this.http.post<{ token: string }>(`${this.API}/register`, data);
  }

  loginWithGoogle() {
    window.location.href = `${this.API}/google`;
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
