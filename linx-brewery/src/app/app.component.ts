import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BreweryService } from '../services/brewery.service';
import { BreweryInterface } from '../interfaces/brewery-response.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(private readonly _breweryService: BreweryService) {}
  breweryList: BreweryInterface[] = [];

  ngAfterViewInit(): void {
    this._breweryService.getAllBreweries().subscribe((breweryResponse) => {
      this.breweryList = breweryResponse;
    });
  }
}
