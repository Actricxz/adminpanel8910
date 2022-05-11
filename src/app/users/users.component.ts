import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:any

  constructor(private http:HttpClient) {
    this.http.get("https://627b29e1a01c46a8531982ab.mockapi.io/users").subscribe((data)=>{
      console.log(data)
      this.userList=data;
    })
   }

  ngOnInit(): void {
  }

}
