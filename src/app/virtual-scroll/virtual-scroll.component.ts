import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {
  myData: any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.getData();
  }

  getData(){
    
       this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((res:any)=>{

        this.myData = res;
      });
   
  }

}
