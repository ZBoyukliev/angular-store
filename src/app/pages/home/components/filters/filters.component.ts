import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: `filters.component.html`,
  styles: [
  ]
})
export class FiltersComponent implements OnInit {


  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'Tisherts']
  constructor() {}

   ngOnInit(): void {
       
   }

   onShowCategory(category: string): void {
    this.showCategory.next(category);
  }

}
