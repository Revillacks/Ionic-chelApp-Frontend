import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { delay } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

interface State {
  loading: boolean,
  products: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient)

  #state = signal<State>({
    loading: true,
    products: []
  })

  public products = computed(() => this.#state().products)
  public loading = computed(() => this.#state().loading)


  constructor(
  ) {
    this.http.get<Product[]>(`${environment.API_URL}/products`)
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          products: res
        })
      })
  }
}
