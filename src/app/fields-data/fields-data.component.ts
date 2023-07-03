import { Component, OnInit, Output, EventEmitter , ViewChild } from '@angular/core';
import { IrrigationService } from '../services/irrigation.service';
import { MatDialog , MatDialogRef} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { AuthService } from '../auth.service';
import { MatSnackBar }  from '@angular/material/snack-bar';
import { TableDataComponent } from '../table-data/table-data.component';


@Component({
  selector: 'app-fields-data',
  templateUrl: './fields-data.component.html',
  styleUrls: ['./fields-data.component.scss']
})



export class FieldsDataComponent  {

  tableData:any
  displayTableData: boolean = false
  displayAddField : boolean = false
  displaygraphs : boolean = false
  userFromSession:any;
  // @Output() displayTableData = new EventEmitter<boolean>();
  @Output() displayaddfieldData = new EventEmitter<boolean>(true);
  @Output() selectedFiledData = new EventEmitter<string>();
  

 
  
  // @ViewChild(TableDataComponent) 
  // private tableDataComponent!: TableDataComponent;
  
 
  selectedField:any ="Select Fields"
  fields : any = []
  fieldTableData : any 
  username : any
  account: boolean = false
  editField : boolean =false
  editfieldsData : any
  details : any
   
 

  constructor(private authService : AuthService, private irrigationService: IrrigationService ,public dialog: MatDialog , public snackBar : MatSnackBar)  {
    
    this.username = sessionStorage.getItem("authToken")
    var data = {
      "username" : this.username
    }
    this.getFieldData(data)
    this.selectedFiledData.emit(this.selectedField)
    this.accountDetails(data)
  }
  
 
  accountDetails(data : any){
    this.irrigationService.accountDetails(data).then((res: { status: string; accountDetails: any; }) => {
      console.log("res",res)
      if(res.status=='success'){
        this.details = res.accountDetails[0]
      }
    })
   
  }
  getFieldData(data : any){
    this.irrigationService.getFieldData(data).then(res => {
      console.log("res",res)
      if(res.status=='success'){
        this.fields = res.fieldData

      }
    })
  }

  geteditFieldData(data : any){
    this.irrigationService.geteditFieldData(data).then(res => {
      console.log("res",res)
      if(res.status=='success'){
        this.editfieldsData = res.editfieldData[0]
        // console.log(this.editfieldsData.crop)

      }
    })
  }

  postDeleteData(){
    
    var fieldData = {
      "name" : this.selectedField.split(",")[0].trim(),
      "crop" : this.selectedField.split(",")[2].trim(),
      "plantingDate" : this.selectedField.split(",")[1].trim()
    }
    console.log("fieldData:" , fieldData)
    this.irrigationService.postDeleteData(fieldData)
  }
  openDialog() {

    if(this.selectedField === "Select Fields"){
      this.snackBar.open('Please Select Any Field To Delete', 'Close' , {
        duration:3000,
        verticalPosition: 'top'
      })
    }
    else {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      width:'350px',
    });
      
    dialogRef.componentInstance.buttonClicked.subscribe((value:any) => {
      console.log(`"emited value : " ${value}`);
      if(`${value}` === "Delete"){
        console.log("Delete")
        this.postDeleteData()
      }
    })
  }
  }

  fieldClick(a:any){
    this.displayTableData = false
    var editdata = {
      "username" : this.username,
      "name" : this.selectedField.split(",")[0].trim(),
      "crop" : this.selectedField.split(",")[2].trim(),
      "plantingDate" : this.selectedField.split(",")[1].trim()
    }
    console.log(editdata)
    this.geteditFieldData(editdata)
    console.log(this.editfieldsData)
    this.editField = false
  }

  displayfieldData(){
    if(this.selectedField == "Select Fields"){
      this.snackBar.open('Please Select Field', 'Close' , {
        duration:3000,
        verticalPosition: 'top'
      })
    }
    this.displayTableData = true
    this.displayAddField = false
    this.displaygraphs = false
    this.account = false
    this.editField = false
  }

  displayaddfield(){
    
    this.displayAddField = true
    this.displayTableData = false
    this.displaygraphs = false
    this.account = false
    this.editField = false
    
  }

  displayeditfield(){
    if(this.selectedField == "Select Fields"){
      this.snackBar.open('Please Select Field', 'Close' , {
        duration:3000,
        verticalPosition: 'top'
      })
    } 
    else{
    this.displayAddField = false
    this.displayTableData = false
    this.displaygraphs = false
    this.account = false
    this.editField = true
    }
  }
  displayaccount(){
    this.account = true
    this.displayAddField = false
    this.displayTableData = false
    this.displaygraphs = false
    this.editField = false
  }
  displaygraphsdata(){

    if(this.selectedField == "Select Fields"){
      this.snackBar.open('Please Select Field', 'Close' , {
        duration:3000,
        verticalPosition: 'top'
      })
    this.displaygraphs = true
    this.displayAddField = false
    this.displayTableData = false
    this.account = false
    this.editField = false
  }
  }
  signOut() {
        this.authService.logout()
  }
  
}
  

