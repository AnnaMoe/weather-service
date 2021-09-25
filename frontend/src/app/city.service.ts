import { Injectable } from '@angular/core';
import { City } from './city';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  getCities(): Observable<City[]> {
    const cities = of([
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
    ]);
    return cities;
  }
}
