import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


 import { Chart, ChartDataSets } from 'chart.js';


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {


  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
 // lineChartLabels: Label[] = [  'January', 'February', 'March', 'April', 'May', 'June', 'July'];
  


ngOnInit(): void {
  const canvas = document.getElementById('myChart') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  const myChart = new Chart(ctx!, { type: 'line',
  data: {
 //   labels: this.lineChartLabels,
    datasets: this.lineChartData
  },
 
});
};

}

