import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent {

  constructor(private userService: UserService) { }

  sales: any;

  ngOnInit(): void {
    this.userService.getUserSales().subscribe({
      next: data => {
        this.sales = JSON.parse(data);
        console.log(this.sales);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
}
