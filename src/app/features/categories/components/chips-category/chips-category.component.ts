import { Component, inject, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { IonicModule } from '@ionic/angular';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-chips-category',
  template: `
  <div class="container-chips">
  @for (category of categoriesService.categories(); track category.id) {
    <ion-chip>{{category.name}}</ion-chip>
  }
</div>
  `,
  imports: [IonicModule],
  standalone: true,
  styleUrls: ['./chips-category.component.scss'],
})
export class ChipsCategoryComponent implements OnInit {

  // @Input() categories !: Category[]
  public categoriesService = inject(CategoryService)
  constructor() { }

  ngOnInit() {
    console.log('componente de categories')
  }

}
