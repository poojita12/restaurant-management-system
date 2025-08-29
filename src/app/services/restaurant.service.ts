import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantDetails } from '../model/restaurant-details';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  // 🔗 Replace with your actual backend endpoint from Swagger
  private apiUrl = 'https://1a1f7da815ac.ngrok-free.app/restaurants';

  constructor(private http: HttpClient) {}

  // ✅ Now fetch restaurants from API instead of static data
  getRestaurants(): Observable<RestaurantDetails[]> {
    return this.http.get<RestaurantDetails[]>(this.apiUrl);
  }
}
