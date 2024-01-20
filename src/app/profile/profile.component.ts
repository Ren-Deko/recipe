import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {

  loading = false;

saveUsername() {
throw new Error('Method not implemented.');
}

constructor(private router: Router) {
  this.router.events.pipe(
    filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
  ).subscribe(event => {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (event instanceof NavigationEnd) {
      this.loading = false;
    }
  });

}
}
