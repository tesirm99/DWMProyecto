import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { ProductCardCartComponent } from '../product-card-cart/product-card-cart.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Input() product: any;

  constructor(private userService: UserService, private prodService: ProductService) { }

  cart: any = [];

  ngOnInit(): void {
    this.cart = this.prodService.getCart();
    console.log('cart', this.cart);
    

  }

  emptyCart() {
    this.prodService.emptyCart().subscribe((data: any) => {
      this.cart = data;
      console.log('cart', this.cart);
    });
  }

  getNumberOfItems() {
    return this.cart.length;
  }
  
  getAmoutToPay() {
    let total = 0;
    this.cart.forEach((item: any) => {
      total += item.price;
    });
    return total;
  }

  confirmPayment() {
    this.prodService.confirmPayment(this.cart).subscribe((data: any) => {
      this.cart = data;
      console.log('cart', this.cart);
    });
  }  
}
