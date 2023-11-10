import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-test',
  templateUrl: './video-test.component.html',
  styleUrls: ['./video-test.component.css']
})
export class VideoTestComponent implements OnInit {

  dataForVideoPlayer:any = {
    url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
