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
    return this.http.get(API_URL + 'user/data', { responseType: 'text', params: { id: this.storageService.getUser() } });
  }

  //Get user purchases
  getUserPurchases(): Observable<any> {
    return this.http.get(API_URL + 'user/purchases', { responseType: 'text', params: { id: this.storageService.getUser() } });
  }

  //Get user sales
  getUserSales(): Observable<any> {
    
    return this.http.get(API_URL + 'product/listByOwner/' + this.storageService.getUser(), { responseType: 'text' });
  }

  newSale(name: string, description: string, price: number, image: string, size: number): Observable<any> {
    const id = this.storageService.getUser();

    const body = {
      owner: id,
      name: name,
      description: description,
      size: size,
      image: image,
      price: price
    }

    return this.http.post(API_URL + 'product/create', body, { responseType: 'text' });
  }

}
