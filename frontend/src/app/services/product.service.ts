import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

const API_URL = 'http://localhost:3000/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart: any = [];

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  getProductData(_id: string) {
    return this.httpClient.get(API_URL + 'dataById/' + _id);
  }

  deleteProduct(_id: string) {
    console.log(_id);
    
    return this.httpClient.delete(API_URL + 'data/delete/' + _id);
  }

  getProductsByName(name: string) {
    return this.httpClient.get(API_URL + 'dataByName/' + name);
  }

  getFeaturedProducts() {
    return this.httpClient.get(API_URL + 'featuredList');
  }

  addToCart(prodData: any) {
    this.cart.push(prodData);
    console.log(this.cart);
    
  }

  getCart() {
    return this.cart;
  }

  deleteFromCart(_id: string) {
    this.cart = this.cart.filter((prod: any) => prod._id !== _id);
  }

  emptyCart() {
    this.cart = [];
    return this.cart;
  }

  // Aqui hay que crear una transaccion para cada item del carro y cambiar el estado del producto a vendido
  confirmPayment(cart: any[]) {

    let data = {
      "buyer": this.storageService.getUser(),
      "products": cart
    }

    return this.httpClient.post(API_URL + 'confirmPayment', data);
  }
}
