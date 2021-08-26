import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit,AfterViewInit {

  startTime:any;
  myVideo: any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.myVideo = document.getElementById("video1"); 
  }

  
  load(){
    this.myVideo.load();
  }
  mute(){
    this.myVideo.muted=true;
  }
  unmute(){
    this.myVideo.muted=false;
  }
  fastGo(){
    this.myVideo.currentTime+=10
  }
  fastBack(){
    this.myVideo.currentTime-=10
  }

  fast(){
    this.myVideo.playbackRate++
  }

  slow(){
    this.myVideo.playbackRate--

  }

  playPause() { 
    if (this.myVideo.paused) 
      this.myVideo.play(); 
    else 
      this.myVideo.pause(); 
  } 
  
  

  

}
