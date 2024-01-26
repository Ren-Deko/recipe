// recipe-form.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent {
  constructor(private http: HttpClient) {}

  submitRecipe(): void {
    const form = document.getElementById('recipeForm') as HTMLFormElement;
    const formData = new FormData(form);

    this.http.post('http://localhost:3000/api/add-recipe', formData)
      .subscribe(
        () => {
          alert('Recipe submitted successfully!');
          // Optionally, reset the form
          form.reset();
        },
        error => {
          console.error('Error:', error);
          alert('Failed to submit recipe. Please try again.');
        }
      );
  }
}
