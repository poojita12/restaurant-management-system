import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-availability',
  templateUrl: './table-availability.component.html',
  styleUrls: ['./table-availability.component.scss']
})
export class TableAvailabilityComponent implements OnInit {
  
  availableTables: { number: number; seats: number }[] = []; // ✅ Fix: Property declared

  ngOnInit() {
    // Dummy data for now, replace with API later
    this.availableTables = [
      { number: 1, seats: 4 },
      { number: 2, seats: 2 },
      { number: 5, seats: 6 }
    ];
  }
}
