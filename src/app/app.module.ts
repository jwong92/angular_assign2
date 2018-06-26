import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailsComponent } from './details/details.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailsComponent,
    ResultsComponent,
    WeatherlistComponent,
    WeatherdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
