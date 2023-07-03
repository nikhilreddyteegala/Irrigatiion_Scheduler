import { Component , Inject , OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-help-popup',
  templateUrl: './help-popup.component.html',
  styleUrls: ['./help-popup.component.scss']
})
export class HelpPopupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ){}

  selectedhelp : any

  ngOnInit(): void {
   this.selectedhelp = this.data.selectedhelp
  }
  

}
