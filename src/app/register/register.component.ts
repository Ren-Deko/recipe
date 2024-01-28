import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service'; // Ensure the path to the service is correct

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
 // Now this will be defined in ngOnInit()

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    // Form initialization in ngOnInit
    this.registerForm = this.fb.group({
      Username: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      // ProfilePicture is not part of the form group, it's handled separately
    });
  }

  onFileSelect(event: Event) {
    const element = event.target as HTMLInputElement;
    const files = element.files;
    if (files && files.length > 0) {
      // Get the first file
      const file = files[0];
      // Add the file to the form data to be submitted
      // Note that 'ProfilePicture' is the key that should match the backend expectations
      this.registerForm.addControl('ProfilePicture', this.fb.control(file));
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('Username', this.registerForm.get('Username')!.value);
      formData.append('Email', this.registerForm.get('Email')!.value);
      formData.append('Password', this.registerForm.get('Password')!.value);

      // Check if a file was added
      if (this.registerForm.contains('ProfilePicture')) {
        formData.append('ProfilePicture', this.registerForm.get('ProfilePicture')!.value);
      }

      this.authService.register(formData).subscribe(
        response => {
          console.log('Registration successful', response);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }
}
