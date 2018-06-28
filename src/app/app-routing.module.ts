import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {DetailsComponent} from './details/details.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  {path: '', component: StartpageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'details/:id', component: DetailsComponent},
  { path: 'andrei', component: WeatherlistComponent },
  { path: 'andrei/:id', component: WeatherdetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
