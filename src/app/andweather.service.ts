import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Andweather } from './andweather';


@Injectable({
  providedIn: 'root'
})
export class AndweatherService {
    key = 'andrei';
    params = new HttpParams()
        .set('api_key', this.key);

    apiURL: string = 'https://jesswong.ca/API.php';

    getWeather(day?: Andweather): Observable<Andweather[]>{
        return this.http.get<Andweather[]>(this.apiURL, { params: this.params });
    }

    // weatherArr: Andweather[] = this.getWeather();

  constructor(private http: HttpClient) { }
}
