import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent {
  sizes = new FormControl('');
  
  sizeList: string[] = ['36','37','38','39','40','41','42','43','44','45','46','47']
  
}
