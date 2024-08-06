import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addItem(item: any) {
    throw new Error('Method not implemented.');
  }
  private cart: CartItem[] = [];

  constructor() {}

  addToCart(item: CartItem) {
    this.cart.push(item);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
