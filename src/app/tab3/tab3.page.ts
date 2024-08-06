import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';

export interface CartItem {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab3Page {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private toastController: ToastController) {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  async presentRemoveToast() {
    const toast = await this.toastController.create({
      message: 'Producto eliminado del carrito',
      duration: 2000, // duración en milisegundos
      position: 'bottom'
    });
    toast.present();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.loadCart();
    this.presentRemoveToast();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  checkout() {
    // lógica para proceder al pago
  }
}
