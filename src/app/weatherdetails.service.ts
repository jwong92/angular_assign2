import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Andweather } from './andweather';

@Injectable({
  providedIn: 'root'
})
export class WeatherdetailsService {
    key = 'andrei';
    params = new HttpParams()
        .set('api_key', this.key);
    apiURL: string = 'https://jesswong.ca/API.php';
    getDay(day: string): Observable<Andweather[]> {
        this.params = this.params.append('day_id', day);
        return this.http.get<Andweather[]>(this.apiURL, { params: this.params });
    }

  constructor(private http: HttpClient) { }
}
