import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Products } from '../../Models/Products';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productListComp : ProductListComponent = undefined;
  product : Products;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}