import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
 selector: 'app-recipe-form',
 templateUrl: './recipe-form.component.html',
})
export class RecipeFormComponent implements OnInit {
 recipeForm!: FormGroup;

 constructor(private formBuilder: FormBuilder) { }

 ngOnInit() {
   this.recipeForm = this.formBuilder.group({
     recipeName: ['', Validators.required],
     recipeDescription: ['', Validators.required],
     recipeDifficulty: ['', Validators.required]
   });
 }

 onSubmit() {
   if (this.recipeForm.valid) {
     const formData = this.recipeForm.value;
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
