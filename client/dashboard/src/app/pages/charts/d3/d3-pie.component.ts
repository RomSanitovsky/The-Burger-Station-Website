import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Branch } from '../../../models/branch';
import { Item } from '../../../models/item';
import { BranchesService } from '../../../services/branch.service';
import { ItemsService } from '../../../services/items.service';
@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent implements OnDestroy,OnInit {
  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  branches: Branch[];
  items: Item[];
  itemsCount;
  branchesCount;

  constructor(private theme: NbThemeService, private BranchesService:BranchesService, private ItemsService: ItemsService) {
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
    this.BranchesService.getAllBranches().subscribe((data:any)=>{
      this.branchesCount = data.results;
      this.branches = data.data.data;
      console.log(data.data.data[0].address);
    });
    this.ItemsService.getAllItems().subscribe((data:any)=>{
      this.itemsCount = data.results;
      this.items = data.data.data;
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
