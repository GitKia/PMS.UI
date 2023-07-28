import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    //{
    //   id: '1111',
    //   name: 'T-shirt',
    //   type: 'Garments',
    //   color: 'blue',
    //   price: 9.99
    // },
    // {
    //   id: '2222',
    //   name: 'Samsung',
    //   type: 'Mobile',
    //   color: 'Black',
    //   price: 1500
    // }
  ];

}
