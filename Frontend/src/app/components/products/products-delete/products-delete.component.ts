import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  product : Product = {
    name: '',
    price: null
  }

  id_product: string = '';

  constructor(private ProductsService : ProductsService, private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id !== null) {
      this.ProductsService.readById(id).subscribe((product) => {
        this.product = product
        this.id_product = id;
      });
    };
  }

  deleteProduct() {
    this.ProductsService.delete(this.id_product).subscribe(() => {
      this.ProductsService.showMsg('Deleted Successfully')
      this.cancel();
    })
  }

  cancel() {
    this.router.navigate(['products']);
  }

}
