import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  startTime:any;
  constructor() { }

  ngOnInit(): void {
  }

  getTime(){
    console.log(this.startTime);
  }
  

}
