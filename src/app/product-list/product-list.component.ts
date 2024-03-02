import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name: string = "iPhone"
  price: number = 1999
  colour: string = "Matte Black"
  discountedPrice: number = this.price - (this.price * 0.2)
}
