import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
<<<<<<< HEAD
  product = {
  name : "iPhone",
  price : 1999,
  colour: "Matte Black",
  discount : 8.5,
  inStock : 50,
  pImage : "assets/71v2jVh6nIL._AC_UF1000,1000_QL80_.jpg"
  }
  

  getDiscount() {
    return this.product.price - this.product.price * this.product.discount / 100
  }
=======
  lisOfStrings: string[] = ['mark', 'bruce', 'alfred']
>>>>>>> 2b77a485afa06637287750ba7f89176b60af5e1d
}

