import { Injectable } from '@angular/core';
import { JWeather } from './j-weather';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWeatherService {

  weathers: JWeather[] = [
    {id: 1, day: 'Monday', feels: [22, 'degrees'], pop: [10,'%'], wind: [20,'mph'], today: true},
    {id: 1, day: 'Monday', feels: [15, 'degrees'], pop: [5,'%'], wind: [15,'mph'], today: false},
    {id: 3, day: 'Wednesday', feels: [25, 'degrees'], pop: [3, '%'], wind: [5, 'mph'], today: false},
    {id: 4, day: 'Thursday', feels: [20, 'degrees'], pop: [20, '%'], wind: [5, 'mph'], today: false},
    {id: 5, day: 'Friday', feels: [21, 'degrees'], pop: [50, '%'], wind: [2, 'mph'], today: false},
    {id: 6, day: 'Saturday', feels: [30, 'degrees'], pop: [60, '%'], wind: [1, 'mph'], today: false},
    {id: 7, day: 'Sunday', feels: [26, 'degrees'], pop: [80, '%'], wind: [10, 'mph'], today: false},
  ];

  getWeather(): Observable<JWeather[]> {
    return of(this.weathers);
  }

  constructor() { }
}
