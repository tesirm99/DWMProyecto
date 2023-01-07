import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from '../services/storage.service';
import { NewSaleComponent } from '../newsale/newsale.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  currentUser: string = "";

  constructor(private storageService: StorageService, public dialog: MatDialog) { }


  openNewSaleDialog(): void {
    this.dialog.open(NewSaleComponent, {
      width: '350px',
      height: '550px'
    });

  }


  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser);
    
  }


}
