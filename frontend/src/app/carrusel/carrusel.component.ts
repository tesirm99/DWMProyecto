import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent{

  @Input() product: any;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true, 
    infinite: true, 
    autoplay: true
  };

  loading = true;
  carProds: any = [];
 
  constructor(private prodService: ProductService, private router: Router){
  }

  ngOnInit(){

    this.prodService.getFeaturedProducts().subscribe(
      data => {
        console.log(data);
        
        this.carProds = data;
        this.carProds = this.carProds.slice(0, 5);
        this.loading = false;
        console.log(this.carProds);
        
      }
    );

  }

  viewProd(): void {
    console.log(this.product);
    this.router.navigate(['/product', this.product._id]);
  }
}


