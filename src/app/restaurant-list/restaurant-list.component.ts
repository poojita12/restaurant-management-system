import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantDetails } from '../model/restaurant-details';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants: RestaurantDetails[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
  }
}
