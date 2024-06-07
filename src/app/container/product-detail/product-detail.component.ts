import { Component, Input } from '@angular/core';
import { Products } from '../../Models/Products';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productListComponent : ProductListComponent = undefined;
  product : Products = this.productListComponent.selectedProduct;
}
