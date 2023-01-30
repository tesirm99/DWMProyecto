import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any;

  searchPrompt: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getFeaturedProducts().subscribe({
      next: data => {
        console.log(data);
        this.productList = data;
      }
    });
  }

  search(searchTerm: string) {
    console.log(searchTerm);
    this.productService.getProductsByName(searchTerm).subscribe({
      next: data => {
        console.log(data);
        this.productList = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  filterByBrand(brand: string){

  }
  

}