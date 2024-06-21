import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importamos ActivatedRoute
import { StoreService } from '../store.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  products = []; 
  categorias = [];

  constructor(private _apiStore: StoreService, private route: ActivatedRoute) {} // Inyectamos ActivatedRoute

  ngOnInit() {
    this.route.params.subscribe(params => { // Subscribimos a los cambios de parámetros en la URL
      const categoria = params['categoria']; // Obtenemos la categoría de los parámetros de la URL si existe
      if (categoria) { // Si se proporciona una categoría en la URL
        this._apiStore.getProductosPorCategoria(categoria).subscribe((data: any) => { // Obtenemos los productos de la categoría
          this.products = data; // Actualizamos la lista de productos con los productos de la categoría
        });
      } else { // Si no se proporciona una categoría en la URL
        this._apiStore.getList().subscribe((data: any) => { // Obtenemos todos los productos
          this.products = data; // Actualizamos la lista de productos con todos los productos
        });
      }
    });

    this._apiStore.getCategories().subscribe((data: any) => { // Obtenemos todas las categorías
      this.categorias = data; // Actualizamos la lista de categorías
    });
  }
}
