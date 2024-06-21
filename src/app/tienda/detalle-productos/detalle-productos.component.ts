import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.scss']
})
export class DetalleProductosComponent {
  id: number = 0;
  title: string = '';
  description: string = '';
  category: string = '';
  image: string = '';
  price: string = '';
  constructor(private _apiStore: StoreService, private route: ActivatedRoute) {

  }
 
  ngOnInit() {
    this.route.params.subscribe((params: any) =>{
      this.id = params['id'];
      this.getData();
    })
  }

  getData() {
    this._apiStore.getDetails(this.id).subscribe((data: any) => {
      this.title = data.title;
      this.description = data.description;
      this.category = data.category;
      this.image = data.image;
      this.price = data.price;
    })
  }
}
