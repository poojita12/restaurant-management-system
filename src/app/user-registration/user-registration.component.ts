import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid && this.user.password === this.user.confirmPassword) {
      console.log('User registered successfully:', this.user);
      
      this.router.navigate(['/book-table']);
    } else {
      console.log('Form invalid or passwords do not match');
    }
  }
}
