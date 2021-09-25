import { Injectable } from '@angular/core';
import { City } from './city';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citiesUrl = 'http://localhost:8000/cities'; // URL to web api

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl);
  }
}
