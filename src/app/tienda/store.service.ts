import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(this.url + 'products');
  }
  getDetails(id:number) {
    return this.http.get(this.url + 'products/' + id);
  }
  getCategories() {
    return this.http.get(this.url + 'products/categories');
  }

  getProductosPorCategoria(categoria: string) {
    return this.http.get(`${this.url}products/category/${categoria}`);
  }
  
}
