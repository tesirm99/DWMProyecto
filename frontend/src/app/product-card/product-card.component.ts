import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: any;
  @Input() parent: string = '';

  show: boolean = true;
  constructor(private prodService: ProductService, private router: Router) { 
    
  }

  ngOnInit(): void {
    console.log(this.parent);

    if(this.parent != 'listaProductos'){
      this.show = true;
    } else {
      this.show = false;
    }
    
  }

  viewProd(): void {
    console.log(this.product);
    this.router.navigate(['/product', this.product._id]);
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
