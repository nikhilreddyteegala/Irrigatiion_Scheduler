import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FieldsDataComponent } from './fields-data/fields-data.component';
import { FieldsComponentComponent } from './fields-component/fields-component.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'app', component: FieldsDataComponent ,canActivate: [AuthGuard]  },
  { path: 'appFields', component: FieldsComponentComponent ,canActivate: [AuthGuard]},
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
