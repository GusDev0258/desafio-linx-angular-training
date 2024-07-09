import { AfterViewInit, Component } from '@angular/core';
import { BreweryService } from '../../../../services/brewery.service';
import { BreweryInterface } from '../../../../interfaces/brewery-response.interface';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CommonModule, PaginationComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements AfterViewInit {
constructor(private readonly _breweryService: BreweryService) {}
  breweryList: BreweryInterface[] = [];
  BREWERY_TYPE_LARGE = 'large';
  BREWERY_TYPE_CLOSED = 'closed';
  BREWERY_TYPE_MICRO = 'micro';
  BREWERY_TYPE_CONTRACT = 'contract';
  BREWERY_TYPE_BREWPUB = 'brewpub';
  BREWERY_TYPE_REGIONAL = 'regional';

  ngAfterViewInit(): void {
  }

  getBreweriesFromPage(breweries: BreweryInterface[]) { 
    this.breweryList = breweries;
  }

  getClassByBreweryType(breweryType: string): string {
    switch (breweryType) {
      case this.BREWERY_TYPE_LARGE:
        return 'brewery__type__large';
      case this.BREWERY_TYPE_CLOSED:
        return 'brewery__type__closed';
      case this.BREWERY_TYPE_MICRO:
        return 'brewery__type__micro';
      case this.BREWERY_TYPE_CONTRACT:
        return 'brewery__type__contract';
      case this.BREWERY_TYPE_BREWPUB:
        return 'brewery__type__brewpub';
      case this.BREWERY_TYPE_REGIONAL:
        return 'brewery__type__regional';
      default:
        return '';
    }
  }
}
