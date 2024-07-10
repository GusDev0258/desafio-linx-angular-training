import { Component, EventEmitter, Output } from '@angular/core';
import { BreweryType } from '../../../enums/brewery-type.enum';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CapitalizePipe],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  breweryTypes: BreweryType[] = [
    BreweryType.MICRO,
    BreweryType.REGIONAL,
    BreweryType.BREWPUB,
    BreweryType.LARGE,
    BreweryType.CLOSED,
    BreweryType.NANO,
    BreweryType.PLANNING,
    BreweryType.BAR,
    BreweryType.CONTRACT,
    BreweryType.PROPRIETOR,
  ]

  @Output('getSelectedFilter') selectedFilter = new EventEmitter<BreweryType>();

  emitSelectedFilter(event: Event) {
    const type = (event.target as HTMLSelectElement).value as BreweryType;
    this.selectedFilter.emit(type); 
  }
}

