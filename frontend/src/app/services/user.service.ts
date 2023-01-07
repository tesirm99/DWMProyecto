import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { createCipher } from 'node:crypto';

const API_URL = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  //Estos son los metodos para obtener los datos del usuario. Los que hay ahora son de prueba, habra que implementar los que se creen en la API
  getUserData(): Observable<any> {
    return this.http.get(API_URL + '/data', { responseType: 'text', params: { email: this.storageService.getUser() } });
  }

}
