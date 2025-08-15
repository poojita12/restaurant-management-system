import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
 
})
export class RestaurantListComponent implements OnInit {
  
  restaurants: any[] = [];

  ngOnInit(): void {
    
    this.restaurants = [
      { name: 'The Cozy Corner', location: 'MG Road', cuisine: 'Italian' },
      { name: 'Spice Heaven', location: 'Brigade Road', cuisine: 'Indian' },
      { name: 'Sushi World', location: 'Koramangala', cuisine: 'Japanese' }
    ];
  }
}
