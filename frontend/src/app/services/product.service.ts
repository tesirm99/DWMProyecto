import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpClient: HttpClient) { }

  getProductData(_id: string) {
    return this.httpClient.get(API_URL + 'data/' + _id);
  }

  deleteProduct(_id: string) {
    console.log(_id);
    
    return this.httpClient.delete(API_URL + 'data/delete/' + _id);
  }
}
