import { Component, OnInit } from '@angular/core';
import {Andweather} from '../andweather';
import {AndweatherService} from '../andweather.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {

  weatherArr: Andweather[];
  constructor(private andweatherService: AndweatherService) { }

  ngOnInit() {
      this.andweatherService.getWeather().subscribe(results => this.weatherArr = results);
  }

}
