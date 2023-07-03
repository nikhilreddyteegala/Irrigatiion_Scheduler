import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IrrigationService } from '../services/irrigation.service';
import { MatSnackBar }  from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {


  display : boolean = true
  hide : boolean = true

  constructor(private router : Router , private irrigationService : IrrigationService , private snackBar : MatSnackBar){

  }
  forgotPasswordForm: FormGroup = new FormGroup({

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });

  newPasswordForm: FormGroup = new FormGroup({

    password: new FormControl('', [Validators.required , Validators.minLength(6) ]),
    
  });

  changePassword(){
    console.log(this.forgotPasswordForm.value)
    var data = this.forgotPasswordForm.value

    this.irrigationService.forgotpassword(data).then((res: {
      errorMessage: string; status: string; }) => {
      console.log("res", res)
      if (res.status === 'Fail') {
        this.snackBar.open(res.errorMessage, 'Close', {
          duration: 5000,
          verticalPosition: 'top'
        });
      }
      if (res.status === 'Success') {
        this.display = false
        
      }
    })
  }
  newPassword(){
    var data = {
      'firstname' : this.forgotPasswordForm.get('firstname')?.value,
      'lastname'  : this.forgotPasswordForm.get('lastname')?.value,
      'username'  : this.forgotPasswordForm.get('username')?.value,
      'password'  : this.newPasswordForm.get('password')?.value
    }
    console.log(data)
    this.irrigationService.newpassword(data).then((res: {errorMessage: string; status: string;}) => {
      console.log("res" , res)
      if(res.status === 'Fail'){
        this.snackBar.open(res.errorMessage, 'Close', {
          duration: 5000,
          verticalPosition: 'top'
        });
      }
        if(res.status === 'success'){
          this.snackBar.open('Success Password Changed Succesfully', 'Close', {
            duration: 10000,
            verticalPosition: 'top'
          });
          this.router.navigate(['/login'])
        }
      
    })
  }
  onCreateAccount(){
    this.router.navigate(['/create-account']);
  }
  loginAgain(){
    
  }

}
