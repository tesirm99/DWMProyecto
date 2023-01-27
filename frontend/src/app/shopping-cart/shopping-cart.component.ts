import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Input() product: any;

  constructor(private userService: UserService, private prodService: ProductService) { }

  sales: any;

  ngOnInit(): void {
    this.userService.getUserSales().subscribe({
      next: data => {
        this.sales = JSON.parse(data);
        console.log(this.sales);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
}
