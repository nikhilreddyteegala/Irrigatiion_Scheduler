import { Injectable ,Output , EventEmitter} from '@angular/core';
import { IrrigationService } from './services/irrigation.service';
import { MatSnackBar }  from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly AUTH_TOKEN_KEY = 'authToken';

  isLoggedIn: boolean = false;
  
  constructor(private  router: Router,private irrigationService : IrrigationService , public snackBar : MatSnackBar) { 
    console.log(this.isLoggedIn)
  }

  login(username : any , password : any)   {
    var loginDetails = {
      "username" : username,
      "password" : password
    }
    // perform login logic here
  this.irrigationService.postLoginDetails(loginDetails).then((res: {
      errorMessage: string; status: string; }) => {
      console.log("res", res)
      if (res.status === 'Fail') {
        this.snackBar.open(res.errorMessage, 'Close', {
          duration: 5000,
          verticalPosition: 'top'
        });
        this.isLoggedIn = false;
      }
      else {
        sessionStorage.setItem(this.AUTH_TOKEN_KEY, username);
        this.isLoggedIn = true;
        const extras: NavigationExtras = {
          replaceUrl: true,
        };
        this.router.navigate(['/app'], extras );
        this.router.navigate(['/app'], { replaceUrl: true });
      }
    }) 
  }

  logout(): void {
    // Perform logout
    sessionStorage.setItem(this.AUTH_TOKEN_KEY , "");
    const extras: NavigationExtras = {
      replaceUrl: true,
    };
     this.router.navigate(['/login'], extras);
     
    // Remove authentication state from session storage
    sessionStorage.removeItem(this.AUTH_TOKEN_KEY);

    this.isLoggedIn = false;
  }

  getIsLoggedIn(){
    return this.isLoggedIn
  }
  
}
