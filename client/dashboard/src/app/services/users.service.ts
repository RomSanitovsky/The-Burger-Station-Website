import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {User} from '../models/user';

import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  username= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserName'))));
  userId= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserId'))));
  errorMessage="";
  loginError=new BehaviorSubject<string>("");
  registerError=new BehaviorSubject<string>("");
  userOrders:any[];
  userPassword:String="";
  currentUser!: User;
  //private usersRegisterUrl=environment.usersRegisterUrl;
  constructor(private http :HttpClient, private router:Router) {
    this.userOrders=[];
   }

  baseUrl= 'http://localHost:8000/api/users';

  signIn(user:User) {
    
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    this.http.post<User>(this.baseUrl+'/login',{
      userEmail:user.userEmail,
      userPassword:user.userPassword
    }).subscribe((data:any)=>
    {
      console.log(data);
      console.log(data.information._id);
      console.log(data.information.userName);
      this.username.next(data.information.userName);
      this.userId.next(data.information._id);
      this.userPassword=user.userPassword;
      localStorage.setItem('token',data.token);
      localStorage.setItem('UserName',data.information.userName);
      localStorage.setItem('UserId',data.information._id);
    },(error)=>{
      console.log(error);
      this.errorMessage=error.error.error;
      this.loginError.next(this.errorMessage);
      console.log(this.errorMessage);


    })
    
  }
  
  



  addUser(user:User) {
    
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    this.http.post<User>(this.baseUrl+'/sign-up/',{
      userEmail:user.userEmail,
      userPassword:user.userPassword,
      userFirstName:user.userRole,
      userLastName:user.FavoriteBranch,
      userPhoneNumber:user.FavoriteItem,
      userAddresses:new Array

    }).toPromise().then((data:any)=>{
      console.log(data);
      this.signIn(user);
    },(error)=>{
      this.errorMessage=error.error.error;
      this.registerError.next(this.errorMessage);
      console.log(this.errorMessage);

    })
  }

  logoutUser(){
    localStorage.removeItem("token");
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserId");

    this.errorMessage="";
    this.loginError.next(this.errorMessage);

  }

  loggedIn(){
       return localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  getUserName(){
    return this.username.toString();
  }

  // updateEmail(email:string){
  //   console.log(email);
  //   this.http.patch(this.baseUrl+'/specific/'+JSON.parse(JSON.stringify(localStorage.getItem('UserId'))),{
  //     userEmail:email,
  //   }).subscribe((data:any)=>{
  //     console.log(data);
  //     this.logoutUser();
  //     this.router.navigate(['/home']);
  //   },(error)=>{
  //     this.errorMessage=error.error.error;
  //     console.log(error);
      
  //   });
  // }
  // updateName(userFirstName: string, userLastName: string) {
  //   this.http.patch(this.baseUrl+'/specific/'+JSON.parse(JSON.stringify(localStorage.getItem('UserId'))),{
  //     userFirstName:userFirstName,
  //     userLastName:userLastName
  //   }).subscribe((data:any)=>{
  //     console.log(data);
  //     this.logoutUser();
  //     this.router.navigate(['/home']);
  //   },(error)=>{
  //     this.errorMessage=error.error.error;
  //     console.log(error);
      
  //   });
  // }
  // updatePassword(userPassword: string) {
  //   this.http.patch(this.baseUrl+'/specific/'+JSON.parse(JSON.stringify(localStorage.getItem('UserId'))),{
  //     userPassword:userPassword
  //   }).subscribe((data:any)=>{
  //     console.log(data);
  //     this.logoutUser();
  //     this.router.navigate(['/home']);
  //   },(error)=>{
  //     console.log(error);
      
  //   });
  // }

}
