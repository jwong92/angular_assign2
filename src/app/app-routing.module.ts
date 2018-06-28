import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component'
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'details/:id', component: DetailsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
