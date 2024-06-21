import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    ListaProductosComponent,
    DetalleProductosComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TiendaModule { }
