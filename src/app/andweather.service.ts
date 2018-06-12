import { Injectable } from '@angular/core';
import { Andweather } from './andweather';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AndweatherService {

    weatherArr: Andweather[] = [
        {
            id: 1
            , day: 'Monday'
            , date: 'June 1st'
            , descr: 'Rain'
            , temp: [17, 'celsius']
            , feels: 22
            , pop: '10%'
            , wind: '20mph'
            , gust: 48
            , sun: 4
            , today: true
        }
        , {
            id: 2
            , day: 'Tuesday'
            , date: 'June 2nd'
            , descr: 'Cloudy with showers'
            , temp: [15, 'celsius']
            , feels: 20
            , pop: '5%'
            , wind: '15mph'
            , gust: 41
            , sun: 5
            , today: false
        }
        , {
            id: 3
            , day: 'Wednesday'
            , date: 'June 3rd'
            , descr: 'A mix of sun and clouds'
            , temp: [20, 'celsius']
            , feels: 18
            , pop: '3%'
            , wind: '5mph'
            , gust: 20
            , sun: 4
            , today: false
        }
        , {
            id: 4
            , day: 'Thursday'
            , date: 'June 4th'
            , descr: 'Chance of a shower'
            , temp: [25, 'celsius']
            , feels: 28
            , pop: '20%'
            , wind: '5mph'
            , gust: 41
            , sun: 5
            , today: false
        }
        , {
            id: 5
            , day: 'Friday'
            , date: 'June 5th'
            , descr: 'Sunny'
            , temp: [24, 'celsius']
            , feels: 20
            , pop: '5%'
            , wind: '15mph'
            , gust: 33
            , sun: 6
            , today: false
        }
        , {
            id: 6
            , day: 'Saturday'
            , date: 'June 6th'
            , descr: 'Mainly sunny'
            , temp: [15, 'celsius']
            , feels: 20
            , pop: '5%'
            , wind: '15mph'
            , gust: 41
            , sun: 5
            , today: false
        }
        , {
            id: 7
            , day: 'Sunday'
            , date: 'June 7th'
            , descr: 'Cloudy with showers'
            , temp: [30, 'celsius']
            , feels: 33
            , pop: '25%'
            , wind: '12mph'
            , gust: 46
            , sun: 7
            , today: false
        }

    ];

    getWeather(): Observable<Andweather[]>{
        return of(this.weatherArr);
    }

  constructor() { }
}
