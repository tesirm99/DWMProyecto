import { Component, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    email : "",
    password : ""
  }

  @Output('isLoggedIn')
  isLoggedIn = false;


  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  
  show: boolean= false;
  submit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        console.log("data: ", data);
        
        this.storageService.saveUser(data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
        this.roles = this.storageService.getUser().roles;
        this.dialogRef.close();
        this.reloadPage();
      }
    });
    this.clear();
  }

  

  reloadPage(): void {
    window.location.reload();
  }

  clear(){
    this.form.email ="";
    this.form.password = "";
    this.show = true;
    this.dialogRef.close();
  }
}
