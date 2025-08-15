import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-toggle',
  templateUrl: './registration-toggle.component.html',
  styleUrls: ['./registration-toggle.component.css']
})
export class RegistrationToggleComponent {
  // Toggle state
  isSignUp = true;

  // Sign Up form data
  signUpData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Sign In form data
  signInData = {
    email: '',
    password: ''
  };

  // Switch between forms
  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }

  // Submit Sign Up
  onSignUp() {
    alert(`Signed up with email: ${this.signUpData.email}`);
  }

  // Submit Sign In
  onSignIn() {
    alert(`Signed in with email: ${this.signInData.email}`);
  }
}
