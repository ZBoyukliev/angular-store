import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: `cart.component.html`
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [] };
  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

}
