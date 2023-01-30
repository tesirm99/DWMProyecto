import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: 'lista-productos.component.html',
  styleUrls: ['lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
  @Input()
  productList: any;

  constructor() { }

  sort = 'desc';
  ngOnInit(): void {
    console.log(this.productList);
    
  }

  onSortUpdated(newSort: any): void {
    this.sort = newSort;
  }

 }
