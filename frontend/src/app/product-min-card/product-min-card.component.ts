import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-min-card',
  templateUrl: './product-min-card.component.html',
  styleUrls: ['./product-min-card.component.css']
})
export class ProductMinCardComponent {

  @Input() product: any;
  @Input() parent: string = '';

  class: string = 'card';
  show: boolean = true;
  constructor(private prodService: ProductService, private router: Router) { 
    
  }

  ngOnInit(): void {
    console.log(this.parent);
    console.log(this.product);
    
  }

  viewProd(): void {
    console.log(this.product);
    this.router.navigate(['/product', this.product._id]);
  }

}
