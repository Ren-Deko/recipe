// recipe-form.component.ts

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent {
  constructor(private http: HttpClient) { }

  submitRecipe(): void {
    const form = document.getElementById('recipeForm') as HTMLFormElement;

    const formData = {
      recipeTitle: (form.querySelector('#recipeTitle') as HTMLInputElement).value,
      description: (form.querySelector('#description') as HTMLTextAreaElement).value,
      ingredients: Array.from(form.querySelectorAll('input[name^="ingredients"]')).map((input: Element) => (input as HTMLInputElement).value),
      instructions: Array.from(form.querySelectorAll('textarea[name^="instructions"]')).map((textarea: Element) => (textarea as HTMLTextAreaElement).value),
      prepTime: (form.querySelector('#prepTime') as HTMLInputElement).value,
      cookingTime: (form.querySelector('#cookingTime') as HTMLInputElement).value,
      difficultyLevel: (form.querySelector('#difficultyLevel') as HTMLSelectElement).value,
    };

    console.log(formData);

    // Now you can send formData to your server using HttpClient
    this.http.post('http://127.0.0.1:8000/api/recipes', formData).subscribe(
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



  removeItem(event: any) {
    const listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
  addItem(listId: any) {
    const list = document.getElementById(listId);
    const newItem = document.createElement('li');
    newItem.innerHTML = `<textarea name="${listId}[]" required></textarea><button type="button" (click)="removeItem($event)">Remove</button>`;
    list?.appendChild(newItem);
  }
}
