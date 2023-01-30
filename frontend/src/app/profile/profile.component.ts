import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from '../services/storage.service';
import { NewSaleComponent } from '../newsale/newsale.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  currentUser: string = "";
  usrData: any;

  constructor(private storageService: StorageService, public dialog: MatDialog, private userService: UserService) { }


  openNewSaleDialog(): void {
    this.dialog.open(NewSaleComponent, {
      width: '350px',
      height: '600px'
    });

  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser);
    this.usrData = this.userService.getUserData().subscribe({
      next: data => {
        this.usrData = JSON.parse(data);
        console.log(this.usrData);
        
      },
      error: err => {
        console.log(err);
      }
    });
    
  }


}
