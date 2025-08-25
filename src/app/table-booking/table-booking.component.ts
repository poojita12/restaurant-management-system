import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.scss']
})
export class TableBookingComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      seats: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Table booked:', this.bookingForm.value);
      
      this.router.navigate(['/register-user']);
    }
  }
}
