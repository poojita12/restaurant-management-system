import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-toggle',
  templateUrl: './registration-toggle.component.html',
  
})
export class RegistrationToggleComponent {
  
  isSignUp = true;

  
  signUpData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  
  signInData = {
    email: '',
    password: ''
  };

  
  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }

  
  onSignUp() {
    alert(`Signed up with email: ${this.signUpData.email}`);
  }

  
  onSignIn() {
    alert(`Signed in with email: ${this.signInData.email}`);
  }
}
