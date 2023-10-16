import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router: Router, private headerService : HeaderService) {
    headerService.headerData = {
      title: 'Products',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
