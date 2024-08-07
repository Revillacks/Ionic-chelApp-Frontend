import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-product-card',
  template: `
  <ion-card>
  <ion-img [src]="product.image" alt="{{product.product_name}}"></ion-img>
  <ion-card-header>
    <ion-card-title>{{ product.product_name }}</ion-card-title>
    <ion-card-subtitle>$ {{ product.price }}</ion-card-subtitle>
    <ion-icon name="add-circle"></ion-icon>
  </ion-card-header>
</ion-card>
  `,
  standalone: true,
  styleUrls: ['./product-card.component.scss'],
  imports: [IonicModule]
})
export class ProductCardComponent implements OnInit {
  @Input() product !: Product


  constructor() {
    addIcons({
      addCircle
    })
  }

  ngOnInit() {
    console.log('Componente que se carga al cargar el component')
  }

}
