import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable, timer } from 'rxjs';
import { BranchesService } from '../../../services/branch.service';

@Component({
  selector: 'ngx-d3-bar',
  template: `
  <nb-card class="list-card" size="large">
  <nb-card-header>Branches-District Chart</nb-card-header>
  <nb-card-body>  
  <ngx-charts-bar-vertical
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
    </nb-card-body>
    </nb-card>
  `,
})
export class D3BarComponent implements OnDestroy, OnInit {

  results = [];

  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;
  NorthCount = Number(localStorage.getItem('NorthCount'));
  CenterCount = Number(localStorage.getItem('CenterCount'));
  SouthCount = Number(localStorage.getItem('SouthCount'));



  constructor(private theme: NbThemeService, private BranchesService: BranchesService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }
  ngOnInit(): void {

    this.results.push({ name: 'North', value: this.NorthCount });
    this.results.push({ name: 'Center', value: this.CenterCount });
    this.results.push({ name: 'South', value: this.SouthCount });

    this.BranchesService.groupByItems().subscribe((data: any) => {
      let North = 0;
      let South = 0;
      let Center = 0;
      if (data.data.results[0]._id === 'Southern' && data.data.results[1]._id == 'Northern') {
        South = data.data.results[0].total
        North = data.data.results[1].total
        Center = data.data.results[2].total
      }
      if (data.data.results[0]._id === 'Northern' && data.data.results[1]._id == 'Southern') {
        North = data.data.results[0].total
        South = data.data.results[1].total
        Center = data.data.results[2].total
      }
      if (data.data.results[0]._id === 'Central' && data.data.results[1]._id == 'Southern') {
        Center = data.data.results[0].total
        South = data.data.results[1].total
        North = data.data.results[2].total
      }
      if (data.data.results[0]._id === 'Central' && data.data.results[1]._id == 'Northern') {
        Center = data.data.results[0].total
        North = data.data.results[1].total
        South = data.data.results[2].total
      }
      if (data.data.results[0]._id === 'Northern' && data.data.results[1]._id == 'Central') {
        North = data.data.results[0].total
        Center = data.data.results[1].total
        South = data.data.results[2].total
      }
      if (data.data.results[0]._id === 'Southern' && data.data.results[1]._id == 'Central') {
        South = data.data.results[0].total
        Center = data.data.results[1].total
        North = data.data.results[2].total
      }
      console.log(data.data.results)
      localStorage.removeItem('SouthCount');
      localStorage.setItem('SouthCount',
        South.toString()
      );

      localStorage.removeItem('NorthCount');
      localStorage.setItem('NorthCount',
        North.toString()
      );

      localStorage.removeItem('CenterCount');
      localStorage.setItem('CenterCount',
        Center.toString()
      );
    }, error1 => {

    })
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
