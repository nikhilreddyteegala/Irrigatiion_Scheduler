import { Component, Inject , OnInit } from '@angular/core';
import { IrrigationService } from '../services/irrigation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { TableDataComponent } from '../table-data/table-data.component';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-edit-dialogbox',
  templateUrl: './edit-dialogbox.component.html',
  styleUrls: ['./edit-dialogbox.component.scss']
})
export class EditDialogboxComponent implements OnInit {

  selectedFGC:any =""
  selectedVWC:any
  selectedSWC:any =""
  selectedIrr:any =""
  selectedRain:any =""
  selectedCrHt:any =""
  selectedRtDp:any =""
  FGCs = [{value:1,label:'1'},{value:2,label:'2'},{value:3,label:'3'},{value:4,label:'4'}]
  userEditedData : any

  constructor( @Inject(MAT_DIALOG_DATA) public data: any , private irrigationService: IrrigationService , private location : Location){}
  
 
  ngOnInit(): void {



       this.selectedFGC = this.data.row.selectedFGC
       this.selectedVWC = this.data.row.selectedVWC
       this.selectedCrHt = this.data.row.selectedCrHt
       this.selectedIrr = this.data.row.selectedIrr
       this.selectedRain = this.data.row.selectedRain
       this.selectedRtDp = this.data.row.selectedRtDp
  }

  editoptions(){
    var useredits = {
      "selectedFGC" : this.selectedFGC,
      "selectedVWC" : this.selectedVWC,
      "selectedIrr" : this.selectedIrr,
      "selectedRain" : this.selectedRain,
      "selectedCrHt" : this.selectedCrHt, 
      "selectedRtDp" : this.selectedRtDp,
      "plantingDate" : this.data.row.plantingDate
    }
    
    console.log("user edited options : " , useredits)
    console.log("row data :" , this.data.row.plantingDate)
    

    
    // this.irrigationService.usereditoptions(useredits).then((res :any)=>{
    // })
    
    
    
    this.irrigationService.usereditoptions(useredits).then((res: {
      errorMessage: string; status: string; }) => {
        console.log("res", res)
        console.log(this.data)

        
      if (res.status === 'Fail') {
        
      }


    })


    // this.tableDataComponent.getTableData()

    
  }

}
