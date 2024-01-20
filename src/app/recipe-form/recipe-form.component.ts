import { Component } from '@angular/core';
import axios from 'axios';


@Component({
    selector: 'app-recipe-form',
    templateUrl: './recipe-form.component.html',
    styleUrls: ['./recipe-form.component.css'],
    standalone: true
})
export class RecipeFormComponent {
    recipeName = '';
    recipeDescription = '';
    recipeDifficulty = '';

    onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.recipeName = target.value;
    }

    onTextareaInput(event: Event) {
        const target = event.target as HTMLTextAreaElement;
        this.recipeDescription = target.value;
    }

    onSelectChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        this.recipeDifficulty = target.value;
    }

    onSubmit() {
        console.log("onSubmit() was called");
        if (this.recipeName && this.recipeDescription && this.recipeDifficulty) {
            const formData = {
                recipeName: this.recipeName,
                recipeDescription: this.recipeDescription,
                recipeDifficulty: this.recipeDifficulty
            };
            axios.post('http://localhost:8000/recipe', formData)
                .then(response => {
                    console.log("Recipe Added Successfully");
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}









