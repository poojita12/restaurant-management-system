import { Injectable } from '@angular/core';
import { RestaurantDetails } from '../model/restaurant-details';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: RestaurantDetails[] = [
    {
      id: 1,
      name: 'Pimlico',
      location: 'Koregaon Park, Pune',
      rating: 4.3,
      cuisine: 'Italian, Alcoholic Beverages',
      imageUrl: 'https://source.unsplash.com/400x300/?restaurant'
    },
    {
      id: 2,
      name: 'Mirage',
      location: 'Sangamvadi, Pune',
      rating: 4.2,
      cuisine: 'Asian, Continental',
      imageUrl: 'https://source.unsplash.com/400x300/?cafe'
    },
    {
      id: 3,
      name: 'Forest Farmer Coffee Roasters',
      location: 'Senapati Bapat Road, Pune',
      rating: 4.4,
      cuisine: 'Coffee, Fast Food',
      imageUrl: 'https://source.unsplash.com/400x300/?coffee-shop'
    }
  ];

  constructor() {}

  getRestaurants(): RestaurantDetails[] {
    return this.restaurants;
  }
}
