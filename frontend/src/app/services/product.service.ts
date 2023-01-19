import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpClient: HttpClient) { }

  deleteProduct(_id: string) {
    console.log(_id);
    
    return this.httpClient.delete(API_URL + 'data/delete/' + _id);
  }
}
