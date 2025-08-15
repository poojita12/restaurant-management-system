import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Add this
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { TableAvailabilityComponent } from './table-availability/table-availability.component';
import { RegistrationToggleComponent } from './registration-toggle/registration-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    RestaurantListComponent,
    TableBookingComponent,
    TableAvailabilityComponent,
    RegistrationToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ✅ Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
