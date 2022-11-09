import { Component, Input, OnInit } from '@angular/core';
import { Properties } from 'src/app/models/properties';
import { Weather } from 'src/app/models/weather';
import { Period } from 'src/app/models/weatherPeriod';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  properties:Properties = {} as Properties;
  periods:Period[] = [];
  weather:Weather = {} as Weather;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherService.fetchWeather().subscribe((response:Weather)=>{
      this.properties = response.properties
      console.log(response.properties)
      
    
     
    }, 
    //error handling
    (err) =>{
      console.log(err);
    })
    // this.weatherService.fetchPeriod().subscribe((response:Properties)=>{

    // })
  }


}
