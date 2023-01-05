import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input()
  isLogged = false;

  openLoginDialog(): void {
    
    this.dialog.open(LoginComponent, {
      width: '300px',
      height: '300px'
    });

  }

  openSignupDialog(): void {
    this.dialog.open(SignupComponent, {
      width: '300px',
      height: '450px'
    });
  }

  
  ngOnInit(): void {
    
  }

}
