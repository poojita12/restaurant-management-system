import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '' // ✅ Added this
  };

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('User Registered:', this.user);
  }
}
