import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})

export class ListaComprasComponent {

  constructor(private userService: UserService) { }

  compras: any;

  ngOnInit(): void {
    this.userService.getUserPurchases().subscribe({
      next: data => {
        this.compras = JSON.parse(data);
        console.log(this.compras);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
