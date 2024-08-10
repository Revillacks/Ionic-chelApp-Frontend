import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';
import { IonicModule } from '@ionic/angular';
import { ChipsCategoryComponent } from "../../../features/categories/components/chips-category/chips-category.component";
import { ProductCardComponent } from './components/product-card/product-card.component';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ChipsCategoryComponent, ProductCardComponent]
})
export class MenuPage {

  products: Product[] = []
  public productsService = inject(ProductsService)

  constructor() { }

  searchProductsByCategory(category: number) {
    this.productsService.getProductByCategory(category)
  }

  receiveMessage($event: any) {
    this.searchProductsByCategory($event)
  }
  handleInputSearch(event: any){
    const query = event.target.value.toLowerCase()
    this.productsService.searchProductByName(query)
  }
}
