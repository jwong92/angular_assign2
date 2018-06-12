import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JWeatherComponent } from './j-weather/j-weather.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';

@NgModule({
  declarations: [
    AppComponent,
    JWeatherComponent,
    WeatherlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
