import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: any = {
    username: "",
    password: "",
    email: "",
    confirmPassword: ""
  }

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private authService: AuthService
  ) { }

  submit(): void{
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.clear();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  clear(){
    this.form.email ="";
    this.form.password = "";
    this.dialogRef.close();
  }
  
}
