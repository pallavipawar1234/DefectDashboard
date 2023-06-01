import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels?: any;
};

@Component({
  selector: 'projectview',
  templateUrl: './projectview.component.html',
  styleUrls: ['./projectview.component.css'],
})
export class ProjectviewComponent implements OnInit {
  ngOnInit(): void {}
  pagename = 'Home';
  public pieChartOptionss!: Partial<ChartOptions> | any;

  constructor() {
    this.pieChartOptionss = {
      series: [10, 2, 3, 5],
      chart: {
        width: 400,
        type: 'pie',
      },
      labels: ['TO DO', 'WIP', 'REVIEW', 'DONE'],
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
