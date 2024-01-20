import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  username = 'user123';
  userEmail = 'user@example.com';

}

