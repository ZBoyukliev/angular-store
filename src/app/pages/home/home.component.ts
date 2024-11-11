import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`
})
export class HomeComponent implements OnInit {

  columns = 3;
  rowHeight: number = ROWS_HEIGHT[this.columns];
  category: string | undefined;

  constructor( private cartService: CartService) {}

  ngOnInit(): void {
      
  }

  onColumnsCountChange(columnsCount: number): void {
      this.columns = columnsCount
      this.rowHeight = ROWS_HEIGHT[this.columns]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

}
