import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './tienda/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './tienda/detalle-productos/detalle-productos.component';


const routes: Routes = [
  {path: '', component: ListaProductosComponent},
  { path: 'productos/:categoria', component: ListaProductosComponent },
  { path: 'details/:id', component: DetalleProductosComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
