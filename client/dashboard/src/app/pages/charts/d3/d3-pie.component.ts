import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
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
  
  itemsCount: any;
  branchesCount: any;
  
  branchNumber = Number(localStorage.getItem('BranchNumber'));

  itemsNumber = Number(localStorage.getItem('ItemsNumber'));
  

  results = [];

  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  branches: Branch[];
  items: Item[];
  

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
    
    this.results.push({name:'Branches', value:this.branchNumber});
    this.results.push({name:'Items', value:this.itemsNumber});
 
    this.BranchesService.getAllBranches().subscribe((data: any) => {
      this.branchesCount = data.results;
      this.branches = data.data.data;
      localStorage.removeItem('BranchNumber');
      localStorage.setItem('BranchNumber',data.results);
      console.log(data.results);
  });

    this.ItemsService.getAllItems().subscribe((data: any) => {
            this.itemsCount = data.results;
            this.items = data.data.data;
            localStorage.removeItem('ItemNumber');
            localStorage.setItem('ItemsNumber',data.results);
            console.log(data.results);
        });
  }


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
