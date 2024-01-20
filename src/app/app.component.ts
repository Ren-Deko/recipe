import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
