import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  @Input() id: any;
  prodData: any;

  relatedProducts: any = [];


  constructor(private router: Router, private actRoute: ActivatedRoute, private prodService: ProductService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    
    this.prodService.getProductData(this.id).subscribe({
      next: data => {
        console.log('Product data: ', data);
        this.prodData = data;
      }
    });

    this.relatedProducts = this.prodService.getFeaturedProducts().subscribe({
      next: data => {
        console.log(data);
        this.relatedProducts = data;
      }
    });
    
  }

}
