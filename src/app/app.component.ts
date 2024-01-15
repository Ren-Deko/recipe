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
  constructor(private toastr: ToastrService) { }

  title = 'recipe';

  ngOnInit() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    function ngOnInit() {
      throw new Error('Function not implemented.');
    }
}
}
