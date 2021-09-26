import { Injectable } from '@angular/core';
import { City } from './city';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citiesUrl = 'http://localhost:8000/cities'; // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // get cities from the server
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl);
  }

  /** POST: add a new hero to the server */
  // asynchronous way with Observable
  // with <void> we return empty body
  addCity(city: City): Observable<void> {
    return this.http.post<void>(this.citiesUrl, city, this.httpOptions);
  }
}
