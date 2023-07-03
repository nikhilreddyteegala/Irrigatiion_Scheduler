import { Component, Inject, Input , OnInit} from '@angular/core';
import { IrrigationService } from '../services/irrigation.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogboxComponent } from '../edit-dialogbox/edit-dialogbox.component';



@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})


export class TableDataComponent implements OnInit {



  @Input() selectedField: any;

  edits: boolean = false
  saves: boolean = false
  selectedVWC: any
  selectedSWC: any
  selectedIrrigation: any
  selectedRain: any
  selectedCropHt: any
  selectedRootDepth: any
  selectedFGC: any

  VWCs = [1, 2, 3, 4, 5]

  tableData: any
  
  
  constructor(private irrigationService: IrrigationService, public dialog: MatDialog) {
    
    
  }
   
  ngOnInit(): void {
    this.getTableData()
    
  }
  getTableData( ) {
    
    console.log(" selected Field : " , this.selectedField)
    
    var data = {
      "fldName" : this.selectedField.split(",")[0].trim(),
      "plantingDate" : this.selectedField.split(",")[1].trim(),
      "crop" : this.selectedField.split(",")[2].trim()
    }

    console.log("sending selected Field : " , data)

    this.irrigationService.getTableData(data).then(res => {
      console.log("res", res)
      if (res.status == 'success') {
        this.tableData = res.tableData
      }
    })

    console.log("Nikhil : " , this.tableData.soilInitWatDeficit)
  }

  openDialog( row :any) {
    console.log(row.plantingDate)
    
    const dialogRef = this.dialog.open(EditDialogboxComponent, {
      width: '350px',
      data: { row: row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getTableData()


    });
  }

  


  dispalyOptions() {

    this.edits = true
  }

  saveOptions() {
    this.edits = false
  }


}

