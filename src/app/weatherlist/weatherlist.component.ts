import { Component, OnInit } from '@angular/core';
import { AndweatherService } from '../andweather.service';
import { Andweather } from '../andweather';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {
    daySearch: Andweather = new Andweather();
    dayString: string;
    dayTemp: string;
    weather: Andweather[];
    error: string;
    setWeather(): void {
        this.andweatherService.getWeather().subscribe(data => this.weather = data,
            (err: HttpErrorResponse) => {
                // this.error = 'Server returned error ' + err.statusText + '. Please, use another API URL';
                if (err.error instanceof Error) {
                    this.error = 'Client-side error occured.' + err.message;
                } else {
                    switch (err.status) {
                        case 401 :
                            this.error = 'API key is not valid (server returned error ' + err.status + ' - ' + err.statusText + '). Please, use another API key.';
                            break;
                        case 404 :
                            this.error = 'API URL is not valid (server returned error ' + err.status + ' - ' + err.statusText + '). Please, use another API URL.';
                            break;
                        case 500 :
                            this.error = 'Server returned error ' + err.status + ' - ' + err.statusText + '. Please, contact owner of the API.';
                            break;
                        default :
                            this.error = err.message;
                            break;
                    }
                }
            });
    }
    findDay(dayQuery?: Andweather): void {
        // console.log('search button is clicked');
        if (dayQuery) {
            this.dayString = dayQuery.day;
        } else {
            this.dayString = this.dayTemp;
        }
        this.andweatherService.getWeather().subscribe(results => this.weather = results);
    }

    constructor(private andweatherService: AndweatherService) { }

  ngOnInit() {
      this.setWeather();
  }

}
