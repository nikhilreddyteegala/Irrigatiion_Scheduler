import { Component, Inject , EventEmitter, Output} from '@angular/core';
import { IrrigationService } from '../services/irrigation.service';




@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  
})
export class DialogBoxComponent {

  fieldData:any
  
  @Output() buttonClicked = new EventEmitter();


  constructor(private irrigationService: IrrigationService){
    
  }

  

 
  deletingField(){
    window.location.reload();
    this.buttonClicked.emit('Delete');

  }
 



  

}
