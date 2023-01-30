import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { StorageService } from '../services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, private storageService: StorageService, private router: Router, private userService: UserService) { }
  usr: string = '';
  @Input()
  isLogged:Boolean = false;

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

  logOut(): void {
    this.storageService.clean();
    this.isLogged = false;
    this.router.navigate(['/']);
  }
  
  ngOnInit(): void {
    this.isLogged = this.storageService.isLoggedIn();
    console.log('isLogged', this.isLogged);
    if(this.isLogged){
      this.userService.getUserData().subscribe((data: any) => {
        console.log('data', data);
        
        this.usr = JSON.parse(data).username;
        console.log('usr', this.usr);
      }
      );
    }
  }
  

}
