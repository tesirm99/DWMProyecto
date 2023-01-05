import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
  ) { }
  email : string ="";
  password : string ="";
  show: boolean= false;

  submit(){
    console.log("email is " + this.email)
    this.clear();
  }
  clear(){
    this.email ="";
    this.password = "";
    this.show = true;
    this.dialogRef.close();
  }
}
