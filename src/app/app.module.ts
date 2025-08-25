import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { TableAvailabilityComponent } from './table-availability/table-availability.component';
import { RegistrationToggleComponent } from './registration-toggle/registration-toggle.component';
import { LoginComponent } from './user-registration/login/login.component';
import { EmployeeRegistrationComponent } from './user-registration/employee-registration/employee-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    RestaurantListComponent,
    TableBookingComponent,
    TableAvailabilityComponent,
    RegistrationToggleComponent,
    LoginComponent,
    EmployeeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,           // keep if you need template-driven
    ReactiveFormsModule    // for reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
