import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  breweryTypes = [
    "Micro",
    "Regional",
    "Brewpub",
    "Large",
    "Closed",
    "Nano",
    "Planning",
    "Bar",
    "Contract",
    "Proprietor",
  ]

  @Output('getSelectedFilter') selectedFilter = new EventEmitter<string>();

  emitSelectedFilter(event: Event) {
    const type = (event.target as HTMLSelectElement).value;
    this.selectedFilter.emit(type); 
  }
}
