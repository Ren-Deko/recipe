import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
      directions: this.fb.array([])
    });

    // Add the initial input fields
    this.addIngredient();
    this.addDirection();

    for (let i = 0; i < 3; i++) {
      this.addDirection();
    }

  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get directions() {
    return this.recipeForm.get('directions') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.control('', Validators.required));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  addDirection() {
    this.directions.push(this.fb.control('', Validators.required));
  }

  removeDirection(index: number) {
    this.directions.removeAt(index);
  }

  // Implement reordering methods here
  // ...

  onSubmit() {
    // Handle form submission
    console.log(this.recipeForm.value);
    // Show toast notification
    this.toastr.success('Recipe Added');
  }

  ngOnInit() {
    // Initialize with 3 direction steps
    for (let i = 0; i < 3; i++) {
      this.addDirection();
    }
}}
