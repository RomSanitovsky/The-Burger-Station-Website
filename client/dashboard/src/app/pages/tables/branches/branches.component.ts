import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../../services/items.service";
import {BranchesService} from "../../../services/branch.service";

@Component({
  selector: 'ngx-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  displayData: any;

  constructor(private branchesService: BranchesService) {
    this.updateTable();
  }

  ngOnInit(): void {
  }

  updateTable() {

    this.branchesService.getAllBranches().subscribe((data: any) => {
      this.displayData = data.data.data;
      console.table(this.displayData)
    });
  }

  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      district: {
        title: 'District',
        type: 'string',
      },
    },
  };
}
