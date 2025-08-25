import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { TableAvailabilityComponent } from './table-availability/table-availability.component';
import { RegistrationToggleComponent } from './registration-toggle/registration-toggle.component';
import { LoginComponent } from './user-registration/login/login.component';
import { EmployeeRegistrationComponent } from './user-registration/employee-registration/employee-registration.component'; // ✅ Added import

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee-register', component: EmployeeRegistrationComponent }, // ✅ Fixed placement
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'book-table', component: TableBookingComponent },
  { path: 'check-tables', component: TableAvailabilityComponent },
  { path: 'register-toggle', component: RegistrationToggleComponent },

  // Default route → Registration page
  { path: '', redirectTo: '/register', pathMatch: 'full' },

  // Wildcard route → Redirect unknown paths back to register
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
