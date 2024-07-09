import { CommonModule } from '@angular/common';
import { Component, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { BreweryService } from '../../../../services/brewery.service';
import { BreweryInterface } from '../../../../interfaces/brewery-response.interface';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements AfterViewInit {
  constructor(private readonly _breweryService: BreweryService){}
  @Output('breweriesByPagination') pageButtonEmitter = new EventEmitter<BreweryInterface[] | []>();

  pages = [1,2,3];
  currentPage = 1;
  changePage(page: number) {
    this._breweryService.getBreweriesByPage(page).subscribe((data) => {
      if(data.length > 0) {
        this.pageButtonEmitter.emit(data);
      }
      return [];
    });    
  }
  ngAfterViewInit() {
    this.changePage(1); 
  }
}
