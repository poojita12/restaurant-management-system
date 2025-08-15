import { Component } from '@angular/core';

@Component({
  selector: 'app-table-availability',
  templateUrl: './table-availability.component.html',
  styleUrls: ['./table-availability.component.scss']
})
export class TableAvailabilityComponent {
  availableTables = [
    { number: 1, seats: 4 },
    { number: 2, seats: 2 },
    { number: 3, seats: 6 }
  ];
}
