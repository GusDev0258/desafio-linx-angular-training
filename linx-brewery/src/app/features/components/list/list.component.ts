import { AfterViewInit, Component } from '@angular/core';
import { BreweryService } from '../../../../services/brewery.service';
import { BreweryInterface } from '../../../../interfaces/brewery-response.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements AfterViewInit {
constructor(private readonly _breweryService: BreweryService) {}
  breweryList: BreweryInterface[] = [];

  ngAfterViewInit(): void {
    this._breweryService.getAllBreweries().subscribe((breweryResponse) => {
      this.breweryList = breweryResponse;
    });
  }
}
