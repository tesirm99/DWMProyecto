import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-newsale',
  templateUrl: './newsale.component.html',
  styleUrls: ['./newsale.component.css']
})
export class NewSaleComponent {

  form: any = {
    name: "",
    description: "",
    price: 0,
    image: "",
    size: 0
  }

  isSuccessful = false;

  constructor(
    public dialogRef: MatDialogRef<NewSaleComponent>,
    private userService: UserService
  ) { }

  submit(): void{
    const { name, description, price, image, size } = this.form;

    this.userService.newSale(name, description, price, image, size).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.clear();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  clear(){
    this.form.name ="";
    this.form.description = "";
    this.form.price = "";
    this.form.image = "";
    this.form.size = 0;
    this.dialogRef.close();
  }
}
