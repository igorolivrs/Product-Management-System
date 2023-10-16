import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductsService, private router: Router ) {  }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.productService.read().subscribe(products => {
      this.products = products 
      console.log('products', this.products);    
    },error => {
      console.log(error);
    });

  }

  goToUpdate(id: number) {
    this.router.navigate(['products/update/', id])
  }
  
  goToDelete(id: number) {
    this.router.navigate(['products/delete/',id])
  }


}
