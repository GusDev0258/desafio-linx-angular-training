import { AfterViewInit, Component } from '@angular/core';
import { BreweryService } from '../../../../services/brewery.service';
import { BreweryInterface } from '../../../../interfaces/brewery-response.interface';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { FilterComponent } from '../filter/filter.component';
import { BreweryType } from '../../../enums/brewery-type.enum';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CommonModule, PaginationComponent, FilterComponent, CapitalizePipe, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
constructor(private readonly _breweryService: BreweryService) {}
  breweryList: BreweryInterface[] = [];

  getBreweriesFromPage(breweries: BreweryInterface[]) { 
    this.breweryList = breweries;
  }

  getClassByBreweryType(breweryType: string): string {
    switch (breweryType ) {
      case BreweryType.MICRO:
        return 'micro';
      case BreweryType.REGIONAL:
        return 'regional';
      case BreweryType.BREWPUB:
        return 'brewpub';
      case BreweryType.LARGE:
        return 'large';
      case BreweryType.CLOSED:
        return 'closed';
      case BreweryType.NANO:
        return 'nano';
      case BreweryType.PLANNING:
        return 'planning';
      case BreweryType.BAR:
        return 'bar';
      case BreweryType.CONTRACT:
        return 'contract';
      case BreweryType.PROPRIETOR:
        return 'proprietor';
      default:
        return '';
    }
  }
  changeBreweryListingByFilter(breweryType: BreweryType) {
    this._breweryService.getBreweriesByType(breweryType).subscribe((breweries) => {
      this.breweryList = breweries;
    });
  }
}
