import { Component } from '@angular/core';
import { City } from './city';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather App';
  cities: City[] = [
    {
      id: 1,
      name: 'Berlin',
      temperature: 10.4,
    },
    {
      id: 1,
      name: 'Barcelona',
      temperature: 15.4,
    },
  ];
}
