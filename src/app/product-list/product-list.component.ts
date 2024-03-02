import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
  name : "iPhone",
  price : 1999,
  colour: "Matte Black",
  discount : 8.5
  }

  getDiscount() {
    return this.product.price - this.product.price * this.product.discount / 100
  }
}

