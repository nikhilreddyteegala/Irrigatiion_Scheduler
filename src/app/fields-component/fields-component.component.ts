import { Component , Input, Output,EventEmitter,OnInit, Pipe, PipeTransform} from '@angular/core';
import { disableBlazorMode } from '@syncfusion/ej2/base';
import { DISABLED } from '@syncfusion/ej2/spreadsheet';
import { IrrigationService } from '../services/irrigation.service';
import { FieldServiceService } from '../services/field-service.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { MatDialog , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelpPopupComponent } from '../help-popup/help-popup.component';
import { MatSnackBar }  from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { delay } from 'rxjs';




export let fieldData: any = false



@Component({
  selector: 'app-fields-component',
  templateUrl: './fields-component.component.html',
  styleUrls: ['./fields-component.component.scss']
})


// @Pipe({
//   name: 'dateFormat'
// })

export class FieldsComponentComponent implements OnInit{
  
  dateForm!: FormGroup;
  ngOnInit() {
    this.dateForm = new FormGroup({
      date: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)])
    });
  }
  @Output() fieldDataSent = new EventEmitter<boolean>();
  
  userName :any;
 
 
  Selected:any = true
  fieldData:any
  title = 'Irrigation';
  data: any 
  name: any 
  cropyear: any =""
  selectedField: any = null
  selectedStation: any = null
  selectedCropType: any= null
  plannedDate: any 
  StartOfRapidGrowth: any 
  StartOfMidSeason: any 
  BeginingOfSeason: any 
  EndOfSeason: any 
  InitialKcb: any = null
  MaximumKcb: any = null
  SelectedInitialCropHeight: any = null
  SelectedMaximumCropHeight: any = null
  SelectedInitialCropHeightTrees: any = null
  SelectedMaximumCropHeightTrees: any = null
  SelectedInitialRootDepth: any = null
  SelectedMaximumRootDepth: any = null
  EndKcb: any = null
  SelectedLayer:any = null
  SelectedSoilType: any = null
  SelectedSoilType1:any = null
  SelectedSoilType2:any = null
  SelectedSoilType3:any = null
  SelectedSoilType4:any =null
  SelectedSoilType5:any =null
  SelectedSoilType6:any =null
  SelectedSoilWateratfieldCapacity: any = 0.24
  SelectedPermentWiltingPoint: any = 0.12
  SelectedMADs: any = 1
  SelectedMAD1: any = 0.5
  SelectedMAD2: any = null
  SelectedMAD3: any = null
  SelectedMAD4: any = null
  SelectedInitialSoilwaterDeficit: any = null
  SelectedREW: any = null
  SelectedTEW: any = null
  SelectedIrrigationSystem: any = null
  SelectedIrrigationfw: any = null
  SelectedEmitterflowrate: any =null
  SelectedSpacingBetweenEmitters: any = null
  SelectedSpacingBetweenBeds: any = null
  SelectedTapesPerBed: any = null
  SelectedIrrigationEfficiency: any = null
  SelectedSoilVolume: any  = null
  SelectedDepth1:any  = null
  SelectedSoilWateratfieldCapacity1: any = null
  SelectedPermentWiltingPoint1: any = null
  SelectedInitialSoilwaterDeficit1: any = 0
  SelectedDepth2: any = null
  SelectedSoilWateratfieldCapacity2: any = null
  SelectedPermentWiltingPoint2: any = null
  SelectedInitialSoilwaterDeficit2: any = 0
  SelectedDepth3: any = null
  SelectedSoilWateratfieldCapacity3: any = null
  SelectedPermentWiltingPoint3: any = null
  SelectedInitialSoilwaterDeficit3: any = 0
  SelectedDepth4: any = null
  SelectedSoilWateratfieldCapacity4: any = null
  SelectedPermentWiltingPoint4: any = null
  SelectedInitialSoilwaterDeficit4: any = 0
  SelectedDepth5: any = null
  SelectedSoilWateratfieldCapacity5: any = null
  SelectedPermentWiltingPoint5: any = null
  SelectedInitialSoilwaterDeficit5: any = 0
  SelectedDepth6: any = null
  SelectedSoilWateratfieldCapacity6: any = null
  SelectedPermentWiltingPoint6: any = null
  SelectedInitialSoilwaterDeficit6: any = 0
  LayerUpdate: any = null
  MAD1From : any
  MAD1To : any;
  MAD2From : any
  MAD2To : any
  MAD3From : any
  MAD3To : any
  MAD4From : any
  MAD4To : any
  result1 : any
  result2 : any
  result3 : any
  result4 : any
  selectedWhichKcb:any = null
  selectedKcbPeriod:any= null
  selectedKcbPeriodFrom1:any
  selectedKcbPeriodTo1:any
  selectedKcb1:any = null
  selectedKcbPeriodFrom2:any
  selectedKcbPeriodTo2:any
  selectedKcb2:any = null
  selectedKcbPeriodFrom3:any
  selectedKcbPeriodTo3:any
  selectedKcb3:any = null
  selectedKcbPeriodFrom4:any
  selectedKcbPeriodTo4:any
  selectedKcb4:any = null
  selectedKcbPeriodFrom5:any
  selectedKcbPeriodTo5:any
  selectedKcb5:any = null
  selectedKcbPeriodFrom6:any
  selectedKcbPeriodTo6:any
  selectedKcb6:any = null
  selectedKcbPeriodFrom7:any
  selectedKcbPeriodTo7:any
  selectedKcb7:any = null
  selectedKcbPeriodFrom8:any
  selectedKcbPeriodTo8:any
  selectedKcb8:any = null
  selectedKcbPeriodFrom9:any
  selectedKcbPeriodTo9:any
  selectedKcb9:any = null
  selectedKcbPeriodFrom10:any
  selectedKcbPeriodTo10:any
  selectedKcb10:any = null
  selectedKcbPeriodFrom11:any
  selectedKcbPeriodTo11:any
  selectedKcb11:any = null
  selectedKcbPeriodFrom12:any
  selectedKcbPeriodTo12:any
  selectedKcb12:any = null
  selectedKcbPeriodFrom13:any
  selectedKcbPeriodTo13:any
  selectedKcb13:any = null
  selectedKcbPeriodFrom14:any
  selectedKcbPeriodTo14:any
  selectedKcb14:any = null
  selectedKcbPeriodFrom15:any
  selectedKcbPeriodTo15:any
  selectedKcb15:any = null
  selectedKcbPeriodFrom16:any
  selectedKcbPeriodTo16:any
  selectedKcb16:any = null
  selectedKcbPeriodFrom17:any
  selectedKcbPeriodTo17:any
  selectedKcb17:any = null
  selectedKcbPeriodFrom18:any
  selectedKcbPeriodTo18:any
  selectedKcb18:any = null
  selectedKcbPeriodFrom19:any
  selectedKcbPeriodTo19:any
  selectedKcb19:any = null
  selectedKcbPeriodFrom20:any
  selectedKcbPeriodTo20:any
  selectedKcb20:any = null
  selectedKcbPeriodFrom21:any
  selectedKcbPeriodTo21:any
  selectedKcb21:any = null
  selectedKcbPeriodFrom22:any
  selectedKcbPeriodTo22:any
  selectedKcb22:any = null
  selectedKcbPeriodFrom23:any
  selectedKcbPeriodTo23:any
  selectedKcb23:any = null
  selectedKcbPeriodFrom24:any
  selectedKcbPeriodTo24:any
  selectedKcb24:any = null
  displayerrormsgs:any = 0





  fields = [
    { value: 'A', lable: 'A', lable1: 'Z', lable2: 'N' },
    { value: 'B', lable: 'B', lable1: 'L', lable2: 'V' }
  ]
  selectedCrop: any =null
  vegetableCrops = ['Tomato', 'Carrot','Potato']
  treeCrops = ['Almond']
  Stations = ['FivePoints', 'Shafter', 'Davis', 'Firebaugh/Telles', 'Durham', 'Camino', 'Startford', 'Parlier', 'McArthur', 'Manteca', 'Modesto', 'Fresno State', 'Browns Valley', 'Westlands', 'Panoche', 'Arvin-Edison', 'Fair Oaks', 'Winters', 'Twitchell Island', 'Orange Cove', 'Belridge', 'Merced', 'Porterville', 'Delano', 'Oakdale', 'Auburn', 'Coalinga', 'Denair II', 'Hastings Tract East', 'Gerber South', 'Shasta College', 'Woodland', 'Diamond Springs', 'Vernoa', 'Staten Island', 'Ryde', 'Biggs', 'Holt', 'Ripon', 'Williams', 'Ridgecrest', 'Lemon Cove', 'Linden']
  cropTypes = ['Vegetable and Field Crop' , 'Tree Crop']
  Kcbs = [0.1, 0.2, 0.3, 0.4, 0.5]
  InitialCropHeightVegetables = [0.2, 0.5, 0.6]
  MaximumCropHeightVegetables = [1, 2, 3]
  InitialCropHeightTrees = [1, 2, 3]
  MaximumCropHeightTrees = [3, 4, 5, 6]
  InitialRootDepthOfVegetables = [0.1,0.2,0.4]
  MaximumRootDepthOfVegetables = [0.5,0.6,0.7,0.8,0.9,1]
  InitialRootDepthOfTrees = [0.5,0.9,1.1,1.4,1.6]
  MaximumRootDepthOfTrees = [1,1.5,1.9,2,2.3,3]
  Layers = [1,2,3,4,5,6]
  Depths = [15,20,30,40,45,55,60,80,85,95,100,105,120,130,135,165,215]
  SoilTypes = [{value: 1 , label:'1-Sand'},{value: 2 , label:'2-Loamy Sand'},{value: 3 , label:'3-Sandy loam'},{value: 4 , label:'4-Loam'},{value: 5 , label:'5-Silt loam'},{value: 6 , label:'6-Silt'},{value: 7 , label:'7-Silt clay loam'},{value: 8 , label:'8-Silt clay'} , {value: 9 , label:'9-Clay'} ];                  
  SoilWateratfieldCapacitys = [{value: 0.24 , label:'24%'},{value: 0.23 , label:'23%'},{value: 0.28 , label:'28%'},{value: 0.30 , label:'30%'},{value: 0.29 , label:'29%'}]
  PermentWiltingPoints = [{value: 0.12 , label:'12%'},{value: 0.15 , label:'15%'},{value: 0.18 , label:'18%'},{value: 0.20 , label:'20%'}]
  MADs = [{value: 0.20 , label:'20%'},{value: 0.30 , label:'30%'},{value: 0.35 , label:'35%'},{value: 0.40 , label:'40%'},{value: 0.45 , label:'45%'},{value: 0.50 , label:'50%'}]
  NoOfMADs = [1,2,3,4]
  InitialSoilwaterDeficits = [0, 1, 2, 3, 4]
  REWs = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  TEWs = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
  IrrigationSystems = [{value: 1 , label:'Subsurface Drip Tape'},{value: 2 , label:'Drip Tape'},{value: 3 , label:'Drip Emitter'},{value: 4 , label:'MicroSprinkler/Spray jet'},{value: 5 , label:'Sprinkler, Orchards'},{value: 6 , label:'Sprinkler, Field Crops'},{value: 7 , label:'Border/Basin'},{value: 8 , label:'Furrow,every furrow,narrow bed'} , {value: 9 , label:'Furrow,every furrow,wide bed'} , {value:10 , label:'Furrow,alternated furrows'}]
  fws = [0.25, 0.3, 0.35, 0.4, 0.5, 0.7, 0.8, 0.9, 1, 1.1]
  Flowrates = [0.1, 0.14, 0.16, 0.18, 0.2, 0.3]
  SpacingBetweenEmitters = [11, 12, 13, 14, 16, 17, 18, 20]
  SpacingBetweenBeds = [30, 40, 50, 60, 65, 70, 80]
  NumberOfTapesPerBeds = [1, 2, 3, 4, 5]
  whichKcbs = [{value: 1, label:"standard crop calender"},{value: 2, label:"use your own calender and kcb"}]
  kcbPeriods = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  IrrigationEfficiencys = [{value: 0.6, label:"60%"},{value: 0.8, label:"80%"},{value: 0.9, label:"90%"},{value: 0.94, label:"94%"},{value: 0.98, label:"98%"},{value: 0.6, label:"60%"},{value: 1, label:"100%"}]
  SoilVolumes = [{value: 0.45, label:"45%"},{value: 0.5, label:"50%"},{value: 0.6, label:"60%"},{value: 0.8, label:"80%"},{value: 0.9, label:"90%"},{value: 1, label:"100%"}]
 
 
 
 
  constructor(private  router: Router ,private irrigationService: IrrigationService , private fieldserviceservice: FieldServiceService, private userService:UserService , public dialog: MatDialog , private snackBar: MatSnackBar ) {
    // this.data = this.getData()
    this.fieldData = this.fieldserviceservice.fieldData
     this.userName =  sessionStorage.getItem("authToken")
     console.log(sessionStorage.getItem("authToken"))

  }

  
  
  postDate() {

    var postData = {
      "selectedField": this.selectedField,
      "username" : this.userName,
      "name": this.name,
      "station": this.selectedStation,
      "cropType":this.selectedCropType,
      "crop":this.selectedCrop,
      "plantingDate":this.plannedDate,
      "crpDateDev":this.StartOfRapidGrowth,
      "crpDateMid":this.StartOfMidSeason,
      "crpDateLate":this.BeginingOfSeason,
      "crpDateHarv":this.EndOfSeason,
      "crpKcbInit":this.InitialKcb,
      "crpKcbMid":this.MaximumKcb,
      "crpKcbEnd":this.EndKcb,
      "crpHtInit":this.SelectedInitialCropHeight,
      "crpHtMax":this.SelectedMaximumCropHeight,
      "crpRtInit":this.SelectedInitialRootDepth,
      "crpRtMax":this.SelectedMaximumRootDepth,
      "irrSoilVolWat":this.SelectedSoilVolume,
      "soilNoOfLayers" : this.SelectedLayer,
      "soilType1": this.SelectedSoilType1,
      "soilType2": this.SelectedSoilType2,
      "soilType3": this.SelectedSoilType3,
      "soilType4": this.SelectedSoilType4,
      "soilType5": this.SelectedSoilType5,
      "soilType6": this.SelectedSoilType6,
      "rew" : this.SelectedREW,
      "tew" : this.SelectedTEW,
      "soilLayer1Depth": this.SelectedDepth1,
      "soilLayer2Depth": this.SelectedDepth2,
      "soilLayer3Depth": this.SelectedDepth3,
      "soilLayer4Depth": this.SelectedDepth4,
      "soilLayer5Depth": this.SelectedDepth5,
      "soilLayer6Depth": this.SelectedDepth6,
      "soilSWCFc1":this.SelectedSoilWateratfieldCapacity1,
      "soilSWCFc2":this.SelectedSoilWateratfieldCapacity2,
      "soilSWCFc3":this.SelectedSoilWateratfieldCapacity3,
      "soilSWCFc4":this.SelectedSoilWateratfieldCapacity4,
      "soilSWCFc5":this.SelectedSoilWateratfieldCapacity5,
      "soilSWCFc6":this.SelectedSoilWateratfieldCapacity6,
      "soilSWPWp1":this.SelectedPermentWiltingPoint1,
      "soilSWPWp2":this.SelectedPermentWiltingPoint2,
      "soilSWPWp3":this.SelectedPermentWiltingPoint3,
      "soilSWPWp4":this.SelectedPermentWiltingPoint4,
      "soilSWPWp5":this.SelectedPermentWiltingPoint5,
      "soilSWPWp6":this.SelectedPermentWiltingPoint6,
      "soilInitWatDeficit1":this.SelectedInitialSoilwaterDeficit1,
      "soilInitWatDeficit2":this.SelectedInitialSoilwaterDeficit2,
      "soilInitWatDeficit3":this.SelectedInitialSoilwaterDeficit3,
      "soilInitWatDeficit4":this.SelectedInitialSoilwaterDeficit4,
      "soilInitWatDeficit5":this.SelectedInitialSoilwaterDeficit5,
      "soilInitWatDeficit6":this.SelectedInitialSoilwaterDeficit6,
      "soilMAD1":this.SelectedMAD1,
      "soilMAD2":this.SelectedMAD2,
      "soilMAD3":this.SelectedMAD3,
      "soilMAD4":this.SelectedMAD4,
      "soilMAD1FromDate":this.MAD1From,
      "soilMAD1ToDate": this.MAD1To,
      "soilMAD2FromDate":this.MAD2From,
      "soilMAD2ToDate": this.MAD2To,
      "soilMAD3FromDate":this.MAD3From,
      "soilMAD3ToDate": this.MAD3To,
      "soilMAD4FromDate":this.MAD4From,
      "soilMAD4ToDate": this.MAD4To,
      "irrSys":this.SelectedIrrigationSystem,
      "irrFw":this.SelectedIrrigationfw,
      // "irrEmitterFr":this.SelectedEmitterflowrate,
      // "IrrEmitterSpc":this.SelectedSpacingBetweenEmitters,
      // "IrrBedsSpc":this.SelectedSpacingBetweenBeds,
      // "IrrNoTapeBed":this.SelectedTapesPerBed,
      // "IrrEff":this.SelectedIrrigationEfficiency,
      
    }
    console.log("postData: ", postData)
    this.irrigationService.postData(postData)
  }

  postOwnDates(){
    var postOwnDate = {
      'selectedKcbPeriodFrom1' : this.plannedDate,
      'selectedKcbPeriodTo1'  : this.selectedKcbPeriodTo1,
      'selectedKcb1'   : this.selectedKcb1,
      'selectedKcbPeriodFrom2' : this.selectedKcbPeriodFrom2,
      'selectedKcbPeriodTo2'  : this.selectedKcbPeriodTo2,
      'selectedKcb2'   : this.selectedKcb2,
      'selectedKcbPeriodFrom3' : this.selectedKcbPeriodFrom3,
      'selectedKcbPeriodTo3'  : this.selectedKcbPeriodTo3,
      'selectedKcb3'   : this.selectedKcb3,
      'selectedKcbPeriodFrom4' : this.selectedKcbPeriodFrom4,
      'selectedKcbPeriodTo4'  : this.selectedKcbPeriodTo4,
      'selectedKcb4'   : this.selectedKcb4,
      'selectedKcbPeriodFrom5' : this.selectedKcbPeriodFrom5,
      'selectedKcbPeriodTo5'  : this.selectedKcbPeriodTo5,
      'selectedKcb5'   : this.selectedKcb5,
      'selectedKcbPeriodFrom6' : this.selectedKcbPeriodFrom6,
      'selectedKcbPeriodTo6'  : this.selectedKcbPeriodTo6,
      'selectedKcb6'   : this.selectedKcb6,
      'selectedKcbPeriodFrom7' : this.selectedKcbPeriodFrom7,
      'selectedKcbPeriodTo7'  : this.selectedKcbPeriodTo7,
      'selectedKcb7'   : this.selectedKcb7,
      'selectedKcbPeriodFrom8' : this.selectedKcbPeriodFrom8,
      'selectedKcbPeriodTo8'  : this.selectedKcbPeriodTo8,
      'selectedKcb8'   : this.selectedKcb8,
      'selectedKcbPeriodFrom9' : this.selectedKcbPeriodFrom9,
      'selectedKcbPeriodTo9'  : this.selectedKcbPeriodTo9,
      'selectedKcb9'   : this.selectedKcb9,
      'selectedKcbPeriodFrom10' : this.selectedKcbPeriodFrom10,
      'selectedKcbPeriodTo10'  : this.selectedKcbPeriodTo10,
      'selectedKcb10'   : this.selectedKcb10,
      'selectedKcbPeriodFrom11' : this.selectedKcbPeriodFrom11,
      'selectedKcbPeriodTo11'  : this.selectedKcbPeriodTo11,
      'selectedKcb11'   : this.selectedKcb11,
      'selectedKcbPeriodFrom12' : this.selectedKcbPeriodFrom12,
      'selectedKcbPeriodTo12'  : this.selectedKcbPeriodTo12,
      'selectedKcb12'   : this.selectedKcb12,
      'selectedKcbPeriodFrom13' : this.selectedKcbPeriodFrom13,
      'selectedKcbPeriodTo13'  : this.selectedKcbPeriodTo13,
      'selectedKcb13'   : this.selectedKcb13,
      'selectedKcbPeriodFrom14' : this.selectedKcbPeriodFrom14,
      'selectedKcbPeriodTo14'  : this.selectedKcbPeriodTo14,
      'selectedKcb14'   : this.selectedKcb14,
      'selectedKcbPeriodFrom15' : this.selectedKcbPeriodFrom15,
      'selectedKcbPeriodTo15'  : this.selectedKcbPeriodTo15,
      'selectedKcb15'   : this.selectedKcb15,
      'selectedKcbPeriodFrom16' : this.selectedKcbPeriodFrom16,
      'selectedKcbPeriodTo16'  : this.selectedKcbPeriodTo16,
      'selectedKcb16'   : this.selectedKcb16,
      'selectedKcbPeriodFrom17' : this.selectedKcbPeriodFrom17,
      'selectedKcbPeriodTo17'  : this.selectedKcbPeriodTo17,
      'selectedKcb17'   : this.selectedKcb17,
      'selectedKcbPeriodFrom18' : this.selectedKcbPeriodFrom18,
      'selectedKcbPeriodTo18'  : this.selectedKcbPeriodTo18,
      'selectedKcb18'   : this.selectedKcb18,
      'selectedKcbPeriodFrom19' : this.selectedKcbPeriodFrom19,
      'selectedKcbPeriodTo19'  : this.selectedKcbPeriodTo19,
      'selectedKcb19'   : this.selectedKcb19,
      'selectedKcbPeriodFrom20' : this.selectedKcbPeriodFrom20,
      'selectedKcbPeriodTo20'  : this.selectedKcbPeriodTo20,
      'selectedKcb20'   : this.selectedKcb20,
      'selectedKcbPeriodFrom21' : this.selectedKcbPeriodFrom21,
      'selectedKcbPeriodTo21'  : this.selectedKcbPeriodTo21,
      'selectedKcb21'   : this.selectedKcb21,
      'selectedKcbPeriodFrom22' : this.selectedKcbPeriodFrom22,
      'selectedKcbPeriodTo22'  : this.selectedKcbPeriodTo22,
      'selectedKcb22'   : this.selectedKcb22,
      'selectedKcbPeriodFrom23' : this.selectedKcbPeriodFrom23,
      'selectedKcbPeriodTo23'  : this.selectedKcbPeriodTo23,
      'selectedKcb23'   : this.selectedKcb23,
      'selectedKcbPeriodFrom24' : this.selectedKcbPeriodFrom24,
      'selectedKcbPeriodTo24'  : this.selectedKcbPeriodTo24,
      'selectedKcb24'   : this.selectedKcb24,
         
    
    }

    this.irrigationService.postOwnDate(postOwnDate)
  }

  fieldClick(event: any) {
    console.log(event)
  }
  cropClick(crop: any) {
    if(crop == 'Tomato'){
      this.plannedDate = '2023-03-22'
      this.StartOfRapidGrowth = '2023-03-22'
      this.StartOfMidSeason = '2023-03-22'
      this.BeginingOfSeason = '2023-03-22'
      this.EndOfSeason = '2023-03-22'
      this.InitialKcb = 0.1
      this.MaximumKcb = 0.3
      this.EndKcb = 0.5
      this.SelectedInitialCropHeight = 0.2
      this.SelectedMaximumCropHeight = 2
      this.SelectedInitialRootDepth = 0.1
      this.SelectedMaximumRootDepth = 0.9
    }
    if(crop == 'Carrot'){
      this.plannedDate = '2023-04-20';
      this.StartOfRapidGrowth = '2023-04-20'
      this.StartOfMidSeason = '2023-04-20'
      this.BeginingOfSeason ='2023-04-20'
      this.EndOfSeason = '2023-04-20'
      this.InitialKcb = 0.1
      this.MaximumKcb = 0.3
      this.EndKcb = 0.5
      this.SelectedInitialCropHeight = 0.2
      this.SelectedMaximumCropHeight = 2
      this.SelectedInitialRootDepth = 0.1
      this.SelectedMaximumRootDepth = 0.9
    }
    if(crop == 'Potato'){
      this.plannedDate = '2022-04-29'
      this.StartOfRapidGrowth = '2022-04-29'
      this.StartOfMidSeason = '2022-04-29'
      this.BeginingOfSeason = '2022-04-29'
      this.EndOfSeason = '2023-03-22'
      this.InitialKcb = 0.1
      this.MaximumKcb = 0.3
      this.EndKcb = 0.5
      this.SelectedInitialCropHeight = 0.2
      this.SelectedMaximumCropHeight = 2
      this.SelectedInitialRootDepth = 0.1
      this.SelectedMaximumRootDepth = 0.9
    }
    if(crop == 'Almond'){
      this.plannedDate = '2023-05-16';
      this.StartOfRapidGrowth = '2023-05-16';
      this.StartOfMidSeason = '2023-05-16';
      this.BeginingOfSeason = '2023-05-16';
      this.EndOfSeason = '2023-03-22'
      this.InitialKcb = 0.1
      this.MaximumKcb = 0.3
      this.EndKcb = 0.5
      this.SelectedInitialCropHeight = 2
      this.SelectedMaximumCropHeight = 5
      this.SelectedInitialRootDepth = 1.4
      this.SelectedMaximumRootDepth = 2.3
    }

      console.log(crop)
      if(this.SelectedMADs == 1){
        this.MAD1From = this.plannedDate
        this.MAD1To = this.EndOfSeason
      }
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // Adding 1 to month since it is zero-based
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  onplannedDate() {
    this.StartOfRapidGrowth = this.plannedDate
    // console.log(date)
    if(this.SelectedMADs == 1){
    this.MAD1From = this.plannedDate
    this.MAD1To = this.EndOfSeason
  }

  
}

openpopup(data : any){
  if(this.plannedDate > this.getCurrentDate()){
  this.dialog.open(HelpPopupComponent , {
    data : {
      selectedhelp : data
    }
  })
  console.log(this.plannedDate)
}
}



  addFields() {
    console.log("Clicked")
    if(this.name == null || this.selectedStation == null || this.selectedCropType == null || this.selectedCrop == null || this.SelectedSoilVolume == null || this.SelectedLayer == null || this.SelectedIrrigationSystem == null){
    this.displayerrormsgs = 1
    this.snackBar.open('Please Fill all details', 'Close', {
      duration: 5000,
      verticalPosition: 'top'
    });
    }
    else {
      if(this.plannedDate > this.getCurrentDate()){
        this.snackBar.open('You have selected the future planning date data will be stored but it will not run untill the dates comes', 'Close', {
          duration: 10000,
          verticalPosition: 'bottom'
        });
      }
    
    this.postDate()
    if(this.selectedWhichKcb == 2){
      this.postOwnDates()
    }
    this.fieldDataSent.emit(false)
    this.router.navigate(['/app'])
    window.location.reload();
    }
    
  }
  UpdateLayers(Layer: any){

    this.LayerUpdate = Layer

  }
  soilType(Soil: any) {
    console.log(Soil)
    if (Soil == 1) {
      this.SelectedREW = 5
      this.SelectedTEW = 10
      this.SelectedSoilWateratfieldCapacity1 = 0.24
      this.SelectedPermentWiltingPoint1 = 0.12
    }
    else if (Soil == 2) {
      this.SelectedREW = 6
      this.SelectedTEW = 12
      this.SelectedSoilWateratfieldCapacity1 = 0.23
      this.SelectedPermentWiltingPoint1 = 0.18
      
    } else if (Soil == 3) {
      this.SelectedREW = 8
      this.SelectedTEW = 18
      this.SelectedSoilWateratfieldCapacity1 = 0.23
      this.SelectedPermentWiltingPoint1 = 0.12
    } else if (Soil == 4) {
      this.SelectedREW = 9
      this.SelectedTEW = 20
      this.SelectedSoilWateratfieldCapacity1 = 0.24
      this.SelectedPermentWiltingPoint1 = 0.18
    } else if (Soil == 5) {
      this.SelectedREW = 9
      this.SelectedTEW = 22
      this.SelectedSoilWateratfieldCapacity1 = 0.23
      this.SelectedPermentWiltingPoint1 = 0.18
    } else if (Soil == 6){
      this.SelectedREW = 10
      this.SelectedTEW = 24
      this.SelectedSoilWateratfieldCapacity1 = 0.24
      this.SelectedPermentWiltingPoint1 = 0.12
    } else if (Soil == 7){
      this.SelectedSoilWateratfieldCapacity1 = 0.23
      this.SelectedPermentWiltingPoint1 = 0.18
    } else if( Soil == 8){
      this.SelectedSoilWateratfieldCapacity1 = 0.24
      this.SelectedPermentWiltingPoint1 = 0.18
    } else {
      this.SelectedSoilWateratfieldCapacity1 = 0.23
      this.SelectedPermentWiltingPoint1 = 0.12
    }

  }
  soilType2(Soil: any) {
    console.log(Soil)
    if (Soil == 1) {
      
      this.SelectedSoilWateratfieldCapacity2 = 0.24
      this.SelectedPermentWiltingPoint2 = 0.12
    }
    else if (Soil == 2) {
      
      this.SelectedSoilWateratfieldCapacity2 = 0.23
      this.SelectedPermentWiltingPoint2 = 0.18
      
    } else if (Soil == 3) {
     
      this.SelectedSoilWateratfieldCapacity2 = 0.23
      this.SelectedPermentWiltingPoint2 = 0.12
    } else if (Soil == 4) {
      
      this.SelectedSoilWateratfieldCapacity2 = 0.24
      this.SelectedPermentWiltingPoint2 = 0.18
    } else if (Soil == 5) {
      
      this.SelectedSoilWateratfieldCapacity2 = 0.23
      this.SelectedPermentWiltingPoint2 = 0.18
    } else if (Soil == 6){
      
      this.SelectedSoilWateratfieldCapacity2 = 0.24
      this.SelectedPermentWiltingPoint2 = 0.12
    } else if (Soil == 7){
      this.SelectedSoilWateratfieldCapacity2 = 0.23
      this.SelectedPermentWiltingPoint2 = 0.18
    } else if( Soil == 8){
      this.SelectedSoilWateratfieldCapacity2 = 0.24
      this.SelectedPermentWiltingPoint2 = 0.18
    } else {
      this.SelectedSoilWateratfieldCapacity2 = 0.23
      this.SelectedPermentWiltingPoint2 = 0.12
    }

  }
  soilType3(Soil: any) {
    console.log(Soil)
    if (Soil == 1) {
      
      this.SelectedSoilWateratfieldCapacity3 = 0.24
      this.SelectedPermentWiltingPoint3 = 0.12
    }
    else if (Soil == 2) {
      
      this.SelectedSoilWateratfieldCapacity3 = 0.23
      this.SelectedPermentWiltingPoint3 = 0.18
      
    } else if (Soil == 3) {
     
      this.SelectedSoilWateratfieldCapacity3 = 0.23
      this.SelectedPermentWiltingPoint3 = 0.12
    } else if (Soil == 4) {
      
      this.SelectedSoilWateratfieldCapacity3 = 0.24
      this.SelectedPermentWiltingPoint3 = 0.18
    } else if (Soil == 5) {
      
      this.SelectedSoilWateratfieldCapacity3 = 0.23
      this.SelectedPermentWiltingPoint3 = 0.18
    } else if (Soil == 6){
      
      this.SelectedSoilWateratfieldCapacity3 = 0.24
      this.SelectedPermentWiltingPoint3 = 0.12
    } else if (Soil == 7){
      this.SelectedSoilWateratfieldCapacity3 = 0.23
      this.SelectedPermentWiltingPoint3 = 0.18
    } else if( Soil == 8){
      this.SelectedSoilWateratfieldCapacity3 = 0.24
      this.SelectedPermentWiltingPoint3 = 0.18
    } else {
      this.SelectedSoilWateratfieldCapacity3 = 0.23
      this.SelectedPermentWiltingPoint3 = 0.12
    }

  }
  soilType4(Soil: any) {
    console.log(Soil)
    if (Soil == 1) {
      
      this.SelectedSoilWateratfieldCapacity4 = 0.24
      this.SelectedPermentWiltingPoint4 = 0.12
    }
    else if (Soil == 2) {
      
      this.SelectedSoilWateratfieldCapacity4 = 0.23
      this.SelectedPermentWiltingPoint4 = 0.18
      
    } else if (Soil == 3) {
     
      this.SelectedSoilWateratfieldCapacity4 = 0.23
      this.SelectedPermentWiltingPoint4 = 0.12
    } else if (Soil == 4) {
      
      this.SelectedSoilWateratfieldCapacity4 = 0.24
      this.SelectedPermentWiltingPoint4 = 0.18
    } else if (Soil == 5) {
      
      this.SelectedSoilWateratfieldCapacity4 = 0.23
      this.SelectedPermentWiltingPoint4 = 0.18
    } else if (Soil == 6){
      
      this.SelectedSoilWateratfieldCapacity4 = 0.24
      this.SelectedPermentWiltingPoint4 = 0.12
    } else if (Soil == 7){
      this.SelectedSoilWateratfieldCapacity4 = 0.23
      this.SelectedPermentWiltingPoint4 = 0.18
    } else if( Soil == 8){
      this.SelectedSoilWateratfieldCapacity4 = 0.24
      this.SelectedPermentWiltingPoint4 = 0.18
    } else {
      this.SelectedSoilWateratfieldCapacity4 = 0.23
      this.SelectedPermentWiltingPoint4 = 0.12
    }

  }
  soilType5(Soil: any) {
    console.log(Soil)
    if (Soil == 1) {
      
      this.SelectedSoilWateratfieldCapacity5 = 0.24
      this.SelectedPermentWiltingPoint5 = 0.12
    }
    else if (Soil == 2) {
      
      this.SelectedSoilWateratfieldCapacity5 = 0.23
      this.SelectedPermentWiltingPoint5 = 0.18
      
    } else if (Soil == 3) {
     
      this.SelectedSoilWateratfieldCapacity5 = 0.23
      this.SelectedPermentWiltingPoint5 = 0.12
    } else if (Soil == 4) {
      
      this.SelectedSoilWateratfieldCapacity5 = 0.24
      this.SelectedPermentWiltingPoint5 = 0.18
    } else if (Soil == 5) {
      
      this.SelectedSoilWateratfieldCapacity5 = 0.23
      this.SelectedPermentWiltingPoint5 = 0.18
    } else if (Soil == 6){
      
      this.SelectedSoilWateratfieldCapacity5 = 0.24
      this.SelectedPermentWiltingPoint5 = 0.12
    } else if (Soil == 7){
      this.SelectedSoilWateratfieldCapacity5 = 0.23
      this.SelectedPermentWiltingPoint5 = 0.18
    } else if( Soil == 8){
      this.SelectedSoilWateratfieldCapacity5 = 0.24
      this.SelectedPermentWiltingPoint5 = 0.18
    } else {
      this.SelectedSoilWateratfieldCapacity5 = 0.23
      this.SelectedPermentWiltingPoint5 = 0.12
    }

  }
  soilType6(Soil: any) {
    console.log(Soil)
    if (Soil == 1) {
      
      this.SelectedSoilWateratfieldCapacity6 = 0.24
      this.SelectedPermentWiltingPoint6 = 0.12
    }
    else if (Soil == 2) {
      
      this.SelectedSoilWateratfieldCapacity6 = 0.23
      this.SelectedPermentWiltingPoint6 = 0.18
      
    } else if (Soil == 3) {
     
      this.SelectedSoilWateratfieldCapacity6 = 0.23
      this.SelectedPermentWiltingPoint6 = 0.12
    } else if (Soil == 4) {
      
      this.SelectedSoilWateratfieldCapacity6 = 0.24
      this.SelectedPermentWiltingPoint6 = 0.18
    } else if (Soil == 5) {
      
      this.SelectedSoilWateratfieldCapacity6 = 0.23
      this.SelectedPermentWiltingPoint6 = 0.18
    } else if (Soil == 6){
      
      this.SelectedSoilWateratfieldCapacity6 = 0.24
      this.SelectedPermentWiltingPoint6 = 0.12
    } else if (Soil == 7){
      this.SelectedSoilWateratfieldCapacity6 = 0.23
      this.SelectedPermentWiltingPoint6 = 0.18
    } else if( Soil == 8){
      this.SelectedSoilWateratfieldCapacity6 = 0.24
      this.SelectedPermentWiltingPoint6 = 0.18
    } else {
      this.SelectedSoilWateratfieldCapacity6 = 0.23
      this.SelectedPermentWiltingPoint6 = 0.12
    }

  }

  
  MADValue(){
    if(this.SelectedMADs == 1){
      this.SelectedMAD1 = 0.5
      this.MAD1From = this.plannedDate
      this.MAD1To = this.EndOfSeason
    }
    if(this.SelectedMADs > 1){
      this.SelectedMAD1 = null
      this.MAD1From = null
      this.MAD1To = null
    }
  }
  calculateDays1( d1:Date , d2:Date){

    console.log(d1 , d2)
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const startTime = date1.getTime();
    const endTime = date2.getTime();
    const diffTime = endTime - startTime;
    const diffDays = diffTime / 86400000;
    this.result1 = Math.round(diffDays);
    

  }

  
  calculateDays2( d1:Date , d2:Date){

    console.log(d1 , d2)
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const startTime = date1.getTime();
    const endTime = date2.getTime();
    const diffTime = endTime - startTime;
    const diffDays = diffTime / 86400000;
    this.result2 = Math.round(diffDays);
    

  }
  
  calculateDays3( d1:Date , d2:Date){

    console.log(d1 , d2)
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const startTime = date1.getTime();
    const endTime = date2.getTime();
    const diffTime = endTime - startTime;
    const diffDays = diffTime / 86400000;
    this.result3 = Math.round(diffDays);
    

  }
  
  calculateDays4( d1:Date , d2:Date){

    console.log(d1 , d2)
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const startTime = date1.getTime();
    const endTime = date2.getTime();
    const diffTime = endTime - startTime;
    const diffDays = diffTime / 86400000;
    this.result4 = Math.round(diffDays);
    

  }
  IrrigationSystem(Irrigation: any) {
    if (Irrigation == 1) {
      this.SelectedIrrigationfw = 0.35
      this.SelectedSoilVolume = 0.45
      this.fws =  [0.25, 0.3, 0.35, 0.4, 0.5]
      this.SoilVolumes = [{value: 0.45, label:"45%"},{value: 0.5, label:"50%"},{value: 0.6, label:"60%"}]
    }
    else if(Irrigation == 2){
      this.SelectedIrrigationfw = 0.35
      this.SelectedSoilVolume = 0.50
      this.fws =  [0.25, 0.3, 0.35, 0.4, 0.5]
      this.SoilVolumes = [{value: 0.45, label:"45%"},{value: 0.5, label:"50%"},{value: 0.6, label:"60%"}]
    }
    else if(Irrigation == 3){
      this.SelectedIrrigationfw = 0.35
      this.SelectedSoilVolume = 0.60
      this.fws =  [0.25, 0.3, 0.35, 0.4, 0.5]
      this.SoilVolumes = [{value: 0.45, label:"45%"},{value: 0.5, label:"50%"},{value: 0.6, label:"60%"}]
    }
    else if (Irrigation == 4) {
      this.SelectedIrrigationfw = 0.9
      this.SelectedSoilVolume = 0.90
      this.fws = [0.5, 0.7, 0.8, 0.9, 1]
      this.SoilVolumes = [{value: 0.6, label:"60%"},{value: 0.5, label:"50%"},{value: 0.9, label:"90%"}]
    }
    else if (Irrigation == 5 ) {
      this.SelectedIrrigationfw = 1.0
      this.SelectedSoilVolume = 1.0
      this.fws = [0.5, 0.7, 0.8, 0.9, 1]
      this.SoilVolumes = [{value: 0.8, label:"80%"},{value: 0.9, label:"90%"},{value: 1.0, label:"100%"}]
    }
    else if(Irrigation == 6){
      this.SelectedIrrigationfw = 1.0
      this.SelectedSoilVolume = 1.0
      this.fws = [0.5, 0.7, 0.8, 0.9, 1]
      this.SoilVolumes = [{value: 0.8, label:"80%"},{value: 0.9, label:"90%"},{value: 1.0, label:"100%"}]
    }
    else if (Irrigation == 7) {
      this.SelectedIrrigationfw = 0.8
      this.SelectedSoilVolume = 0.80
      this.fws = [0.4, 0.5, 0.7, 0.8, 0.9]
      this.SoilVolumes = [{value: 0.8, label:"80%"},{value: 0.9, label:"90%"},{value: 1.0, label:"100%"}]
    }
    else if (Irrigation == 8) {
      this.SelectedIrrigationfw = 0.5
      this.SelectedSoilVolume = 0.50
      this.fws = [0.35, 0.4, 0.5, 0.7, 0.8]
      this.SoilVolumes = [{value: 0.45, label:"45%"},{value: 0.5, label:"50%"},{value: 0.8, label:"80%"}]
    }
    else {
      this.SelectedIrrigationfw = 0.4
      this.SelectedSoilVolume = 0.45
      this.fws = [0.3, 0.35, 0.4, 0.5, 0.7,]
      this.SoilVolumes = [{value: 0.45, label:"45%"},{value: 0.6, label:"60%"},{value: 1.0, label:"100%"}]
    }
  }

  openDialog(data : any){
    this.dialog.open(HelpPopupComponent , {
      data : {
        selectedhelp : data
      }
    })

  }

}
