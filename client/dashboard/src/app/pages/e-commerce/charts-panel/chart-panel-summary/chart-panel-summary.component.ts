import { Component, Input, OnInit } from '@angular/core';
import { BranchesService } from '../../../../services/branch.service';
import { ItemsService } from '../../../../services/items.service';
import { UsersService } from '../../../../services/users.service';


@Component({
  selector: 'ngx-chart-panel-summary',
  styleUrls: ['./chart-panel-summary.component.scss'],
  template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
    </div>
  `,
})
export class ChartPanelSummaryComponent implements OnInit{
  
  summary = [];

  branchCount = Number(localStorage.getItem("branchCount"));
  itemsCount = Number(localStorage.getItem("itemsCount"));
  usersCount = Number(localStorage.getItem("usersCount"));
  
  constructor(private BranchesService: BranchesService, private ItemsService: ItemsService, private UsersService: UsersService){

  }

  ngOnInit(): void {

    this.summary.push({ title: 'Users', value: this.usersCount });
    this.summary.push({ title: 'Menu Items', value: this.itemsCount });
    this.summary.push({ title: 'Branches', value: this.branchCount });
    
    this.BranchesService.getAllBranches().subscribe((data:any)=>{
      localStorage.removeItem("branchCount");
      localStorage.setItem("branchCount",data.results);
    });
    this.ItemsService.getAllItems().subscribe((data:any)=>{
      localStorage.removeItem("itemsCount");
      localStorage.setItem("itemsCount",data.results);
    });
    this.UsersService.getAllUsers().subscribe((data:any)=>{
      localStorage.removeItem("usersCount");
      localStorage.setItem("usersCount",data.results);
    });

  }
  
}

