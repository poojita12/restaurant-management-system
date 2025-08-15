import { Component } from '@angular/core';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.scss']
})
export class TableBookingComponent {
  booking = {
    name: '',
    date: '',
    time: '',
    seats: 1
  };

  onBookTable() {
    console.log('Table booked:', this.booking);
  }
}
