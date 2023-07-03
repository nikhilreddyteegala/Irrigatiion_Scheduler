import { Component, Input, OnInit } from '@angular/core';
import { IrrigationService } from '../services/irrigation.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{


  @Input() details : any
  username : any
  firstName : any
  lastName : any
  email : any
  constructor(private irrigationService : IrrigationService){
    this.username = sessionStorage.getItem("authToken")
    
  }
  ngOnInit(): void {
    this.firstName = this.details.firstname
    this.lastName = this.details.lastname
    this.email = this.details.email
  }
  
  
}
