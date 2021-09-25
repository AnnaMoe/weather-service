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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.cityService.addCity({ name } as City).subscribe(() => {
      this.getCities();
    });
  }

  ngOnInit() {
    this.getCities();
  }

  title = 'Weather App';
  cities: City[] = [];
}
