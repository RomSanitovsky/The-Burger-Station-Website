import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../../services/items.service";

@Component({
  selector: 'ngx-table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['./table-items.component.scss']
})
export class TableItemsComponent implements OnInit {
  displayData: any;

  constructor(private itemsService: ItemsService) {
    this.updateTable();
  }

  ngOnInit(): void {
  }

  updateTable() {

    this.itemsService.getAllItems().subscribe((data: any) => {
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
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
    },
  };
}
