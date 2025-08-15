import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { TableAvailabilityComponent } from './table-availability/table-availability.component';
import { RegistrationToggleComponent } from './registration-toggle/registration-toggle.component';


const routes: Routes = [
  { path: 'register-user', component: UserRegistrationComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'book-table', component: TableBookingComponent },
  { path: 'check-tables', component: TableAvailabilityComponent },
  { path: '', redirectTo: '/register-user', pathMatch: 'full' },
  { path: 'register-toggle', component: RegistrationToggleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
