import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page {
  drinks = [
    { name: 'Margarita', description: 'A refreshing tequila-based cocktail.' },
    { name: 'Mojito', description: 'A Cuban cocktail with rum and mint.' },
    // Más bebidas
  ];

  constructor(private cartService: CartService, private toastController: ToastController) {}

  orderNow(drink: any) {
    // Lógica para ordenar ahora
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Producto agregado al carrito',
      duration: 2000, // duración en milisegundos
      position: 'bottom'
    });
    toast.present();
  }

  addToCart(drink: any) {
    this.cartService.addToCart(drink);
    this.presentToast();
  }
}
