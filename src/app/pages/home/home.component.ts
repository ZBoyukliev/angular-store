import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`
})
export class HomeComponent implements OnInit {
  columns = 3

  constructor() {}

  ngOnInit(): void {
      
  }

  onColumnsCountChange(columnsCount: number): void {
      this.columns = columnsCount
  }

}
