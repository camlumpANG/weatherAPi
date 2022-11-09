import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Period } from '../models/weatherPeriod';
import { Properties } from '../models/properties';
import { Weather } from '../models/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  constructor(private http:HttpClient) { }
  url:string = "https://api.weather.gov/gridpoints/DTX/65,33/forecast";

  fetchPeriod():Observable<Period[]> {
    return this.http.get<Period[]>(this.url);
  }

  fetchProperties():Observable<Properties> {
    return this.http.get<Properties>(this.url);
  }

  fetchWeather():Observable<Weather> {
    return this.http.get<Weather>(this.url);
  }
}
