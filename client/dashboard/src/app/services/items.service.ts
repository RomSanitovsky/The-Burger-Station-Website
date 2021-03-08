import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';


@Injectable({
    providedIn: 'root'
})
export class ItemsService {

    baseUrl = 'http://localHost:8000/api/items';

    itemId = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('ItemId'))));
    itemName = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('ItemName'))));
    itemPrice = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('ItemPrice'))));
    itemType = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('ItemType'))));

    itemsCount: any;

    itemsNumber = new BehaviorSubject<any>(localStorage.getItem('ItemsNumber'));
  
    Items: Item[];

    constructor(private http: HttpClient, private router: Router) {
        this.Items = [];
    }

    getAllItems(){
        return this.http.get<any>(this.baseUrl);
    }

  


}
