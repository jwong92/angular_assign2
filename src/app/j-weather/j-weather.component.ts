import { Component, OnInit } from '@angular/core';
import {JWeather} from '../j-weather';
import { JWeatherService } from '../j-weather.service';

@Component({
  selector: 'app-j-weather',
  templateUrl: './j-weather.component.html',
  styleUrls: ['./j-weather.component.css']
})
export class JWeatherComponent implements OnInit {
  weathers: JWeather[];

  constructor(private weatherService: JWeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(ws => this.weathers = ws);
  }

}
