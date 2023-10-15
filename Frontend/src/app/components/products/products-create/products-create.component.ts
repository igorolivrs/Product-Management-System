import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {

  product : Product = {
    name: '',
    price: null
  }

  constructor(private productsService : ProductsService, private router: Router){}

  createProduct(): void {
    this.productsService.create(this.product).subscribe(() => {
      this.productsService.showMsg('Product Created!')
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
