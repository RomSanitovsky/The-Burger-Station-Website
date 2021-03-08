import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
import { Branch } from '../../models/branch';
import { Item } from '../../models/item';
import { User } from '../../models/user';
import { BranchesService } from '../../services/branch.service';
import { ItemsService } from '../../services/items.service';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'ngx-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  branches: Branch[];
  items: Item[];
  users: User[];

  itemsCount;
  branchesCount;
  usersCount;


  constructor(private BranchesService: BranchesService, private ItemsService: ItemsService, private UsersService: UsersService) {
    this.branches = [];
    this.items = [];
    this.users = [];
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
    this.UsersService.getAllUsers().subscribe((data:any)=>{
      this.usersCount = data.results;
      this.users = data.data.data;
      console.log(data);
    });


  }
  
}
