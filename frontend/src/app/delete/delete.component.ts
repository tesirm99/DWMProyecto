import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private userService:UserService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteAccount() {
    this.userService.deleteUser().subscribe({
      next: (data) => {
        console.log('Delete account');
        console.log(data);
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

}
