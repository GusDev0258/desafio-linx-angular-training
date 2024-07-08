import { AfterViewInit, Component } from '@angular/core';
import { BreweryService } from '../../../../services/brewery.service';
import { BreweryInterface } from '../../../../interfaces/brewery-response.interface';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
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
  getClassByBreweryType(breweryType: string): string {
    switch (breweryType) {
      case 'large':
        return 'brewery__type__large';
      case 'closed':
        return 'brewery__type__closed';
      case 'micro':
        return 'brewery__type__micro';
      case 'contract':
        return 'brewery__type__contract';
      case 'brewpub':
        return 'brewery__type__brewpub';
      case 'regional':
        return 'brewery__type__regional';
      default:
        return '';
    }
  }
}
