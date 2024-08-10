import { Component, inject, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-card',
  template: `
  <ion-card>
  <ion-img [src]="product.image" alt="{{product.product_name}}"></ion-img>
  <ion-card-header>
    <ion-card-title>{{ product.product_name }}</ion-card-title>
    <ion-card-subtitle>$ {{ product.price }}</ion-card-subtitle>
    <ion-button  (click)="this.cartService.addItem(product)" shape="round">
      <ion-icon slot="icon-only" name="add-circle"></ion-icon>
    </ion-button>
  </ion-card-header>
</ion-card>
  `,
  standalone: true,
  styleUrls: ['./product-card.component.scss'],
  imports: [IonicModule]
})
export class ProductCardComponent implements OnInit {
  @Input() product !: Product
  public cartService = inject(CartService)

  constructor() {
    addIcons({
      addCircle
    })
  }


  ngOnInit() {
    console.log('Componente que se carga al cargar el component')
  }

}
