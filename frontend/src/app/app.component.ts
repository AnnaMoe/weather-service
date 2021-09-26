
import { Component } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // initialize the App component - creating object
  constructor(private cityService: CityService) {}

  // retrieve the cities from the service
  getCities(): void {
    this.cityService.getCities().subscribe((cities) => (this.cities = cities));
  }

  // add a city (difference to rails: backend and frontend server - need to add in frontend too)
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    // need the connecting service - asks the service to add the city
    this.cityService.addCity({ name } as City).subscribe(() => {
      // once adding is ready, it will be saved on the variable -> ask to get all the cities with the new record
      this.getCities();
    });
  }

  // call the cities  
  ngOnInit() {
    this.getCities();
  }

  title = 'Weather App';
  cities: City[] = [];
}
