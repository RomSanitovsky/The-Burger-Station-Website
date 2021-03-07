import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
import { Branch } from '../../models/branch';
import { Item } from '../../models/item';
import { BranchesService } from '../../services/branch.service';
import { ItemsService } from '../../services/items.service';


@Component({
  selector: 'ngx-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  branches: Branch[];
  items: Item[];

  itemsCount;
  branchesCount;

  constructor(private BranchesService: BranchesService, private ItemsService: ItemsService) {
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
  
}
