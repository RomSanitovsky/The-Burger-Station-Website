import { Component, OnInit } from '@angular/core';
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

  constructor(private BranchesService: BranchesService, private ItemsService: ItemsService) { 
    this.branches = [];
    this.items = [];
  }

  ngOnInit(): void {
    this.branches = this.BranchesService.getAllBranches();
    this.items = this.ItemsService.getAllItems();
  }

}
