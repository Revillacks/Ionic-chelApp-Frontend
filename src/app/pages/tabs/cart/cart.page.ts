import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { CartService } from './services/cart.service';
import { IonicModule } from '@ionic/angular';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CardComponent, AsyncPipe]
})
export class CartPage {

  public cartService = inject(CartService)
  public totalAmount$ !: Observable<number>

  constructor() {
    addIcons({

      trashOutline
    })
    this.totalAmount$ = this.cartService.totalAmount$;
  }
}
