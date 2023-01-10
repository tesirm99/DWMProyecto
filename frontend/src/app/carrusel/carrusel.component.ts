import { Component} from '@angular/core';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent{

  slideConfig={
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true, 
    infinite: true, 
    autoplay: true
  }

  images = [
    {img: "https://media.restocks.net/products/DD1873-102/nike-dunk-low-next-nature-black-white-w-1-1000.png", 
    href: "https://restocks.net/es/p/nike-dunk-low-next-nature-black-white-w?size_id=7&valuta=EUR&country=ES&msclkid=33c99852768d1f4eaffafbefc7a8b286&utm_source=bing&utm_medium=cpc&utm_campaign=Restocks%20%7C%20Shopping%20%7C%20Spanje&utm_term=4588055869646033&utm_content=Alle%20producten"},
    {img: "https://media.restocks.net/products/DV0827-100/nike-dunk-low-plaid-1-1000.png", 
    href: "https://restocks.net/es/p/nike-dunk-low-plaid"},
    {img: "https://media.restocks.net/products/DV1694-900/nike-dunk-low-se-acid-wash-gs-1-1000.png", 
    href: "https://restocks.net/es/p/nike-dunk-low-se-acid-wash-gs"}, 
    {img: "https://media.restocks.net/products/DR0156-800/nike-dunk-low-safari-swoosh-kumquat-1-1000.png", 
    href: "https://restocks.net/es/p/nike-dunk-low-safari-swoosh-kumquat"}, 
    {img: "https://media.restocks.net/products/DV0833-300/nike-dunk-low-reverse-brazil-1-1000.png", 
    href: "https://restocks.net/es/p/nike-dunk-low-reverse-brazil"}
  ]
  constructor(){
  }

  ngOnInit(){

  }
}
