import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Branch } from '../../../models/branch';
import { Item } from '../../../models/item';
import { BranchesService } from '../../../services/branch.service';
import { ItemsService } from '../../../services/items.service';
@Component({
  selector: 'ngx-d3-pie',
  template: `
  <nb-card class="list-card" size="large">
  <nb-card-header>Items-Type Chart</nb-card-header>
  
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
    
    </nb-card>
  `,
})
export class D3PieComponent implements OnDestroy, OnInit {

  foodCount = Number(localStorage.getItem('FoodCount'));

  drinkCount = Number(localStorage.getItem('DrinkCount'));


  results = [];

  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  branches: Branch[];
  items: Item[];


  constructor(private theme: NbThemeService, private BranchesService: BranchesService, private ItemsService: ItemsService) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });

    this.branches = [];
    this.items = [];
  }

  ngOnInit(): void {
    this.results.push({ name: 'Food', value: this.foodCount });
    this.results.push({ name: 'Drink', value: this.drinkCount });

    this.ItemsService.groupByItems().subscribe((data: any) => {
      console.log(data.data.results);
      let drinkCount = 0;
      let foodCount = 0;
      if (data.data.results[1]._id === 'drink') {
        drinkCount = data.data.results[1].total
        foodCount = data.data.results[0].total
      } else {
        drinkCount = data.data.results[0].total
        foodCount = data.data.results[1].total
      }
      localStorage.removeItem('FoodCount');
      localStorage.setItem('FoodCount',
        foodCount.toString()
      );
      localStorage.removeItem('DrinkCount');
      localStorage.setItem('DrinkCount',
        drinkCount.toString()
      );
    }, error1 => {

    });

  }


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
