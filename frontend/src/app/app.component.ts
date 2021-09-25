import { Component } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cityService: CityService) {}

  getCities(): void {
    this.cityService.getCities().subscribe((cities) => (this.cities = cities));
  }

  ngOnInit() {
    this.getCities();
  }

  title = 'Weather App';
  cities: City[] = [];
}
