import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BreweryInterface } from '../../../../interfaces/brewery-response.interface';
import { BreweryService } from '../../../../services/brewery.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  constructor(private readonly _breweryService: BreweryService) {}

  brewery: BreweryInterface | undefined;

  @Input() id: string = '';

  ngOnInit(): void {
    this._breweryService
      .getBreweryById(this.id)
      .subscribe((brewery) => (this.brewery = brewery));
  }

  getGoogleMapsLink(latitude: string | undefined, longitude: string | undefined): string {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  }

}
