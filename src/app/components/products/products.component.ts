import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private producsService: ProductsService, private router: Router){}
  
  ngOnInit(): void {
    this.producsService.getAllProducts()
    .subscribe({
      next: (products) => {
        this.products = products;
      }, 
      error: (response) => {
        console.log(response)
      }
    })
  }

}
