import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreweryInterface } from '../interfaces/brewery-response.interface';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  BASE_URL: string =  "https://api.openbrewerydb.org/v1/"

  constructor(
    private readonly _http: HttpClient
  ) {}

  getAllBreweries(): Observable<BreweryInterface[]> {
    return this._http.get<BreweryInterface[]>(`${this.BASE_URL}breweries`);
  }

  getBreweriesByPage(page: number) {
    return this._http.get<BreweryInterface[]>(`${this.BASE_URL}breweries?page=${page}&per_page=20`);
  }

  getBreweriesByType(breweryType: string): Observable<BreweryInterface[]> {
    return this._http.get<BreweryInterface[]>(`${this.BASE_URL}breweries?by_type=${breweryType}&per_page=20`);
  }
}
