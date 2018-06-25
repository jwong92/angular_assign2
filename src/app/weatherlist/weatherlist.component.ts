import { Component, OnInit } from '@angular/core';
import { AndweatherService } from '../andweather.service';
import { Andweather } from '../andweather';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {
    weather: Andweather[];
    setWeather(): void {
        this.andweatherService.getWeather().subscribe(data => this.weather = data);
    }
  constructor(private andweatherService: AndweatherService) { }

  ngOnInit() {
      this.setWeather();
  }

}
