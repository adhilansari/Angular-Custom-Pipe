import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { employeeData } from 'src/app/data';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit{
  constructor(private http:HttpClient){}
  data!:IEmployee[];
  searchKey!:string
  orderedProducts:any

  ngOnInit(): void {
    // this.http.get('').subscribe((val:any)=>{
    // this.data=val
    // console.log(this.data);
    // })
    this.data=employeeData

  }


}

