import { Component} from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent{

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true, 
    infinite: true, 
    autoplay: true
  };

  loading = true;
  carProds: any = [];
 
  constructor(private prodService: ProductService){
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
}
