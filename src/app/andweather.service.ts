import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Andweather } from './andweather';


@Injectable({
  providedIn: 'root'
})
export class AndweatherService {
    key: string = 'andrei';
    // apiURL: string = 'http://u3.by/new_list2_api.php?api_key=AIzaSyClzfrOzB818x55FASHvX4JuGQciR9lv7q';
    apiURL: string = 'https://jesswong.ca/API.php?api_key=' + this.key;

    getWeather(name?: string): Observable<Andweather[]>{
        if (name) {
            return this.http.get<Andweather[]>(this.apiURL + `&name=${name}`);
        }
        return this.http.get<Andweather[]>(this.apiURL);
    }

  constructor(private http: HttpClient) { }
}
