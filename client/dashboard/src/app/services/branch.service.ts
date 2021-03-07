import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { Branch } from '../models/branch';
import { elementAt } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class BranchesService {

    baseUrl = 'http://localhost:8000/api/branches/';

    branchId = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('BranchId'))));
    branchName = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('BranchName'))));
    branchAddress = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('BranchAddress'))));
    branchDistrict = new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('BranchDistrict'))));

    Branches: Branch[];

    constructor(private http: HttpClient, private router: Router) {
        this.Branches = [];
    }

    getAllBranches(){
        return this.http.get<any>(this.baseUrl);
    }


}
