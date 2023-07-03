import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IrrigationService } from '../services/irrigation.service';
import { MatSnackBar }  from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  // registerForm!: FormGroup;
  
  hide : boolean = true
  
  constructor(private irrigationService : IrrigationService , private router : Router , private snackBar: MatSnackBar){

  }

  registerForm: FormGroup = new FormGroup({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
    email : new FormControl('' , [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required , Validators.minLength(6) ])
  });

  ngOnInit() {
    
  }
  onSubmit() {
    console.log(this.registerForm.get('firstname')?.value)

    console.log(this.registerForm.value);

    var registrationDetails = this.registerForm.value
    console.log(registrationDetails)
    // this.irrigationService.postRegistrationDetails(registrationDetails)
    this.irrigationService.postRegistrationDetails(registrationDetails).then((res: {
      errorMessage: string; status: string; }) => {
      console.log("res", res)
      if (res.status === 'Fail') {
        
        this.snackBar.open(res.errorMessage, 'Close', {
          duration: 5000,
          verticalPosition: 'top'
        });
      }
      if (res.status === "Success"){
        this.snackBar.open(res.status, 'Close', {
          duration: 5000,
          verticalPosition: 'top'
        });
        this.router.navigate(['/login'])
      }
    })
    // Handle form submission here, e.g. register the user
  }
  loginAgain(){
    this.router.navigate(['/login'])
  }
}
