import { Component } from '@angular/core';

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
  ]
}
