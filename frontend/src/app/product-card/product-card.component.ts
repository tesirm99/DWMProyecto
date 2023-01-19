import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: any;

  constructor(private prodService: ProductService) { }

  ngOnInit(): void {

  }

  deleteProd(): void {
    console.log(this.product);
    this.prodService.deleteProduct(this.product._id).subscribe({
      next: data => {
        console.log(data);
        window.location.reload();
      }
    });
  }

}
