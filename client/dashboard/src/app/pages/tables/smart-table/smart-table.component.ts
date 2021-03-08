import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { UsersService } from '../../../services/users.service';
import { FormLayoutsComponent } from '../../forms/form-layouts/form-layouts.component';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  settings = {
    actions: {
      custom: [
        {
          name: 'yourAction',
          title: '<i class="" title="YourAction" ></i>'
        }
      ],
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
     
    },
  };

  source: LocalDataSource = new LocalDataSource();

  table = [{
    id: "",
    name: "",
    username: "",
    email: ""
  },]

  filteredData:Array<any>;

  constructor(private service: SmartTableData, private UsersService: UsersService) {
    this.filteredData=new Array<any>();
  }

  ngOnInit(): void {
    
    this.updateTable();
    
  }

  updateTable() {

    this.UsersService.getAllUsers().subscribe((data:any)=>{
      this.filteredData = data.data.data;
      this.updateUsers();
    });
  }


  updateUsers() {
    console.log(this.filteredData);
    this.filteredData.forEach(element => {
      this.table.push({
              id: element._id,
              name: '',
              username: element.username,
              email: element.email
            });
    });
    this.source.load(this.table);
  }

  onEdit(){
    console.log('clicked');
  }
  
  onCustom(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
    console.log('clicked');
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

