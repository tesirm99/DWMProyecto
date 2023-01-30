import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-card-cart',
  templateUrl: './product-card-cart.component.html',
  styleUrls: ['./product-card-cart.component.css']
})
export class ProductCardCartComponent {

  @Input() product: any;

  constructor(private prodService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  viewProd(): void {
    console.log(this.product);
    this.router.navigate(['/product', this.product._id]);
  }

  removeItem(): void {
    console.log(this.product);
    this.prodService.deleteFromCart(this.product._id);
    window.location.reload();
  }

}
