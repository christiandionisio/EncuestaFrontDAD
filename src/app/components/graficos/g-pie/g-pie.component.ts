import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-g-pie',
  templateUrl: './g-pie.component.html',
  styleUrls: ['./g-pie.component.css']
})
export class GPieComponent implements OnInit, OnChanges {

  @Input() nro_encuestados_ciclo:any[] = [];
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [
    []
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    //console.log("G-Barra OnChange");
    
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    for (let index = 0; index < this.nro_encuestados_ciclo.length; index++) {
      this.doughnutChartLabels.push(this.nro_encuestados_ciclo[index].ciclo)
      this.doughnutChartData.push(this.nro_encuestados_ciclo[index].total)
    }
    
  }

}
