import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {DetailsComponent} from './details/details.component';
import {ResultsComponent} from './results/results.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'results/:name', component: ResultsComponent},
    { path: 'andrei', component: WeatherlistComponent },
    { path: 'andrei/:id', component: WeatherlistComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
