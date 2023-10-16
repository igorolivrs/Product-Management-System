import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {

  product : Product = {
    name: '',
    price: null
  }

  constructor(private productsService : ProductsService, private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id !== null) {
      this.productsService.readById(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  updateProduct() {
    this.productsService.update(this.product).subscribe(() => {
      this.productsService.showMsg('Updated Successfully')
      this.router.navigate(['/products']);
    });
  }

  cancel(){
    this.router.navigate(['/products']);
  }

}
