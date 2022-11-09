import { Component, Input, OnInit } from '@angular/core';
import { Properties } from 'src/app/models/properties';
import { Period } from 'src/app/models/weatherPeriod';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input() properties:Properties = {} as Properties
  @Input() period:Period= {} as Period;
  constructor() { }

  ngOnInit(): void {
  }

}
