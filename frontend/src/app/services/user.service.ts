import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const API_URL = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  //Estos son los metodos para obtener los datos del usuario. Los que hay ahora son de prueba, habra que implementar los que se creen en la API
  getUserData(): Observable<any> {
    return this.http.get(API_URL + 'user/data/' + this.storageService.getUser(), { responseType: 'text'});
  }

  //Get user purchases // Esta no funciona
  getUserPurchases(): Observable<any> {
    
    return this.http.get(API_URL + 'product/purchases/' + this.storageService.getUser(), { responseType: 'text' });
  }

  //Get user sales // Esta funciona
  getUserSales(): Observable<any> {
    
    return this.http.get(API_URL + 'product/listByOwner/' + this.storageService.getUser(), { responseType: 'text' });
  }

  newSale(name: string, description: string, price: number, image: string, size: number, brand: string): Observable<any> {
    const id = this.storageService.getUser();

    const body = {
      owner: id,
      name: name,
      description: description,
      size: size,
      image: image,
      price: price,
      brand: brand,
      status: "available"
    }

    return this.http.post(API_URL + 'product/create', body, { responseType: 'text' });
  }

}
