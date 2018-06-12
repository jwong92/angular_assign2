import { Injectable } from '@angular/core';
import { JWeather } from './j-weather';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWeatherService {

  weathers: JWeather[] = [
    {id: 1, day: 'Monday', feels: 22, pop: '10%', wind: '20mph', today: true},
    {id: 2, day: 'Tuesday', feels: 15, pop: '5%', wind: '15mph', today: false},
    {id: 3, day: 'Wednesday', feels: 25, pop: '3%', wind: '5mph', today: false},
    {id: 4, day: 'Thursday', feels: 20, pop: '20%', wind: '5mph', today: false},
    {id: 5, day: 'Friday', feels: 21, pop: '50%', wind: '2mph', today: false},
    {id: 6, day: 'Saturday', feels: 30, pop: '60%', wind: '1mph', today: false},
    {id: 7, day: 'Sunday', feels: 26, pop: '80%', wind: '10mph', today: false},
  ];

  getWeather(): Observable<JWeather[]> {
    return of(this.weathers);
  }

  constructor() { }
}
