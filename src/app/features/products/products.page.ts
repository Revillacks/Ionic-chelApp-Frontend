import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonSearchbar } from '@ionic/angular/standalone';
import { ProductsService } from './services/products.service';
import { Product } from './models/product.model';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ChipsCategoryComponent } from "../categories/components/chips-category/chips-category.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProductCardComponent, ChipsCategoryComponent]
})
export class ProductsPage {
  products: Product[] = []
  public productsService = inject(ProductsService)

  constructor() { }

  searchProductsByCategory(category: number) {
    this.productsService.getProductByCategory(category)
  }

  receiveMessage($event: any) {
    this.searchProductsByCategory($event)
  }
}
