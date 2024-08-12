import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { fileTrayStackedOutline, keyOutline, personCircleOutline } from 'ionicons/icons';


interface Category {
  id: number;
  category: string;
}
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.page.html',
  styleUrls: ['./addcategory.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  providers: [ModalController]
})
export class AddcategoryPage implements OnInit {

    categories: Category[] = [];
    categoryForm: FormGroup;
    mostrarModal: boolean = false;
    categorySeleccionado: Category | null = null;

    categoryOptions = {
      header: 'Selecciona Categoría'
    };

    constructor(private formBuilder: FormBuilder) {
      this.categoryForm = this.formBuilder.group({
        category: ['', Validators.required],
      });
    }

    ngOnInit() {
      // Cargar categorías desde localStorage
      const categoriesGuardadas = localStorage.getItem('categories');
      if (categoriesGuardadas) {
        this.categories = JSON.parse(categoriesGuardadas);
      } else {
        // Cargar categorías iniciales (simulación)
        this.categories = [
          { id: 1, category: 'Cerveza' },
          { id: 2, category: 'Cocteles' },
        ];
      }
    }

    nuevaCategory() {
      this.categorySeleccionado = null;
      this.categoryForm.reset();
      this.mostrarModal = true;
    }

    editarCategory(category: Category) {
      this.categorySeleccionado = category;
      this.categoryForm.patchValue(category);
      this.mostrarModal = true;
    }

    borrarCategory(id: number) {
      this.categories = this.categories.filter(c => c.id !== id);

      // Actualizar localStorage
      localStorage.setItem('categories', JSON.stringify(this.categories));
    }

    guardarCategory() {
      if (this.categoryForm.invalid) {
        return;
      }

      const nuevaCategory = this.categoryForm.value as Category;

      if (this.categorySeleccionado) {
        const index = this.categories.findIndex(c => c.id === this.categorySeleccionado!.id);
        this.categories[index] = { ...nuevaCategory, id: this.categorySeleccionado.id };
      } else {
        nuevaCategory.id = this.categories.length > 0 ? Math.max(...this.categories.map(c => c.id)) + 1 : 1;
        this.categories.push(nuevaCategory);
      }

      // Guardar en localStorage
      localStorage.setItem('categories', JSON.stringify(this.categories));

      console.log('Categoría guardada:', nuevaCategory);
      this.cerrarModal();
    }

    cerrarModal() {
      this.mostrarModal = false;
    }
  }
