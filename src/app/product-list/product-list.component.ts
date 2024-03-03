import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name : string = "Bruce Wayne"
  addToCard:number = 0
  product = {
  name : "iPhone",
  price : 1999,
  colour: "Matte Black",
  discount : 8.5,
  inStock : 10,
  pImage : "assets/71v2jVh6nIL._AC_UF1000,1000_QL80_.jpg"
  }

  getDiscount() {
    return this.product.price - this.product.price * this.product.discount / 100
  }

  increment() {
    if (this.addToCard < this.product.inStock) (this.addToCard++)
  }

  decrement() {
    if (this.addToCard > 0) { this.addToCard-- }
  }
}

