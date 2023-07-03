import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  showPassword = false;
  password = '';
  hide: boolean = true
  

  registerForm!: FormGroup;

  loginForm: FormGroup = new FormGroup({

    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  forgotPasswordForm: FormGroup = new FormGroup({

    firstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required)
  });

  ngOnInit() { }

  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
    
  }

  onSubmit() {
    // handle form submission

    console.log(this.loginForm.value)

    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.login(username, password);
      console.log(this.authService.isLoggedIn)
      this.userService.setData(this.loginForm.get('username')?.value)

      console.log("After Login")
    }
  }

  onCreateAccount() {
    this.router.navigate(['/create-account']);
  }

  forgotPassword() {
   this.router.navigate(['/forgot-password']);
  }
  changePassword(){

  }
}




