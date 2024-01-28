import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // URL of your API

  constructor(private http: HttpClient) {}

  // The register method now takes a FormData object instead of any
  register(formData: FormData) {
    return this.http.post(`${this.apiUrl}/register`, formData);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout() {
    // Logic for user logout will be here
  }
}
