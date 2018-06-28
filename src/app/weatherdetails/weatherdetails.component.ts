import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherdetailsService } from '../weatherdetails.service';
import { Andweather } from '../andweather';
import {AndweatherService} from '../andweather.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {
    weather: Andweather[];
    num: string;
    getNum(): void {
        this.num = this.route.snapshot.paramMap.get('id');
        console.log(this.num);
    }
    setWeather(): void {

        this.weatherdetailsService.getDay(this.num).subscribe(data => this.weather = data);
    }
  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private weatherdetailsService: WeatherdetailsService
  ) { }

  ngOnInit() {
      this.getNum();
      this.setWeather();
  }

}
