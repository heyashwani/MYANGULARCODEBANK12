import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  startTime:any;
  myVideo: any;
  constructor() { }

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
