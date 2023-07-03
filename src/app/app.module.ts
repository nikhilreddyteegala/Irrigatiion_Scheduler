import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsComponentComponent } from './fields-component/fields-component.component';
import { FieldsDataComponent } from './fields-data/fields-data.component';
import { TableDataComponent } from './table-data/table-data.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatButtonModule}  from '@angular/material/button';
import {MatIconModule}  from '@angular/material/icon';
import {MatFormFieldModule}  from '@angular/material/form-field';
import {MatInputModule}  from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { GraphsComponent } from './graphs/graphs.component';
import { EditDialogboxComponent } from './edit-dialogbox/edit-dialogbox.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HelpPopupComponent } from './help-popup/help-popup.component';
import { AccountComponent } from './account/account.component';
import { EditFieldsComponent } from './edit-fields/edit-fields.component';




@NgModule({
  declarations: [
    AppComponent,
    FieldsComponentComponent,
    FieldsDataComponent,
    TableDataComponent,
    GraphsComponent,
     DialogBoxComponent,
     EditDialogboxComponent,
     LoginpageComponent,
     CreateAccountComponent,
     ForgotPasswordComponent,
     HelpPopupComponent,
     AccountComponent,
     EditFieldsComponent,
     
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  MatSelectModule,
  MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
//   entryComponents: [
//     DialogBoxComponent 
// ],
// schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
