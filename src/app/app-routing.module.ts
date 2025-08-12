import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { TableAvailabilityComponent } from './table-availability/table-availability.component';


const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },         // User registration form
  { path: 'restaurants', component: RestaurantListComponent },        // Show list of restaurants
  { path: 'book-table', component: TableBookingComponent },           // Booking a table
  { path: 'check-tables', component: TableAvailabilityComponent },    // Check available tables
                    
  { path: '', redirectTo: '/register', pathMatch: 'full' }             // Default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
