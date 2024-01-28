import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Remove this line
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correct property name
})

export class AppComponent {
  isLoggedIn = false; // Track user login status

  constructor(private toastr: ToastrService) { }

  title = 'recipe';

  login() {
    this.isLoggedIn = true; // Simulate user login
    this.toastr.success('Logged In'); // Show toastr message
  }

  logout() {
    this.isLoggedIn = false;
    this.toastr.info('Logged Out');
  }
}
