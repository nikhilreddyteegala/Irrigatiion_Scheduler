import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName: any ;

  constructor() { }

  setData(data:any){
    this.userName = data
  }

  getData(){
    return this.userName
  }

}