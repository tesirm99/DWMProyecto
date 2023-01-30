import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private userService:UserService, private storageService: StorageService, private router: Router, private location:Location) { }

  ngOnInit(): void {
  }

  deleteAccount() {
    this.userService.deleteUser().subscribe({
      next: () => {
        this.storageService.removeSession();
        this.storageService.loggedIn = false;
        this.router.navigate(['']).then(()=> {
          window.location.reload();
        });
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  goBack() {
    this.location.back();
  }

}
