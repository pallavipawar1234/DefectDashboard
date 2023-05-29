import { Component } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Defect Dashboard';
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
