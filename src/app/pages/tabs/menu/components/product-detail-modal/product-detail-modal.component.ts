import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ProductDetailModalComponent{

  @Input() product!: Product;
  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

}
