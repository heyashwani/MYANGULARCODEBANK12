import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() recievedData:any = {}


  @ViewChild("videoPreview") videoPreview:ElementRef;
  @ViewChild("timePreview") timePreview:ElementRef;

  startTime:any;
  myVideo: any;
  vidCont: any;
  myFlag: number = 0;
  perc: number;
  videoDuration: any;
  videoCurrentTime: any;
  videoDurationToShow: any;
  videoCurrentTimeToShow: string;
  videoCurrentBufferTime: any;
  bufferPerc: number;
  cirTemp: number;
  timeOnTemp: any;
  canvas: any;
  showPlay:boolean = true;

  // 
  settingPopoverFlag:boolean = false;
  settingMenuPopoverFlag:boolean = true;
  settingSpeedPopoverFlag:boolean = false;
  settingQualityPopoverFlag:boolean = false

  
  

  constructor(private _renderer:Renderer2) { 

    
  }

  ngOnInit(): void {
    
    
  }

  


  ngAfterViewInit(){
    this.myVideo = document.getElementById("video1"); 
    this.vidCont = document.getElementById("ask_video_container");  
    this.canvas = document.getElementById("canvas");  
      
    
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
    console.log(this.myVideo.currentTime) 
    console.log(this.myVideo.duration)
    if (this.myVideo.paused){
      this.myVideo.play(); 
      this.showPlay = false;
    }
    else{
      this.myVideo.pause(); 
      this.showPlay = true;
    } 
      
  } 

  reqFullScreen(){
    if (this.myFlag == 0) {
      this.myFlag = 1
      this.vidCont.requestFullscreen();
      console.log("sdfasfafsa fss")
    }
    else{
      this.myFlag = 0
      document.exitFullscreen();
    }
    
  }

  reqPicInPicMode(){
    this.myVideo.requestPictureInPicture();
  }

  onTimeUpdate(){
    this.videoCurrentTime = this.myVideo.currentTime;
    this.videoCurrentTimeToShow = this.time_format(this.myVideo.currentTime)
    this.videoDuration = this.myVideo.duration;
    this.perc = (this.videoCurrentTime / this.videoDuration ) * 100;
    
    this.videoCurrentBufferTime = this.myVideo.buffered.end(0);
    console.log(this.myVideo.buffered.end(0))
    this.bufferPerc = (this.myVideo.buffered.end(0) / this.myVideo.duration) * 100
    
  
  }

  onMetaDataLoad(){
    this.videoDuration = this.myVideo.duration
    this.videoCurrentTime = this.myVideo.currentTime
    
    this.videoDurationToShow = this.time_format(this.myVideo.duration)
    this.videoCurrentTimeToShow = this.time_format(this.myVideo.currentTime)
    
  }

  time_format(seconds:any) {
    var m = Math.floor(seconds / 60) < 10 ? 0 + Math.floor(seconds / 60): Math.floor(seconds / 60);
    var s = Math.floor(seconds - m * 60) < 10
      ? "0" + Math.floor(seconds - m * 60)
      : Math.floor(seconds - m * 60);
    return m + ":" + s;
  }

  onProgressBarClick(e:any){
    console.log(e.pageX)
    var position = e.pageX - document.getElementById("ask_progress_container").offsetLeft;
    // console.log($progress.offset().left)
    this.perc = 100 * (position / document.getElementById("ask_progress_container").clientWidth);
    
    
    this.myVideo.currentTime = (this.myVideo.duration * this.perc) / 100;
  }

  onProgressHover(e:any){
    
    var position = e.pageX - document.getElementById("ask_progress_container").offsetLeft;
    this.cirTemp = 100 * (position / document.getElementById("ask_progress_container").clientWidth);
    this.timeOnTemp = (this.myVideo.duration * this.cirTemp) / 100;
    let timeOn = this.timeOnTemp
    this.timeOnTemp = this.time_format(this.timeOnTemp)
    // console.log(this.timeOnTemp)

    var canvas = document.getElementById('canvas');
    this.canvas.currentTime  = timeOn
    // canvas.getContext('2d').drawImage(this.myVideo, 0, 0, this.myVideo.videoWidth, this.myVideo.videoHeight);
    
  }

  onProgressMouseEnter(e:any){
    console.log("sdfa")
    this._renderer.removeClass(this.videoPreview.nativeElement, "myClass")
    this._renderer.removeClass(this.timePreview.nativeElement, "myClass")
  }

  onProgressMouseLeave(e:any){
    console.log("sdfa")
    this._renderer.addClass(this.videoPreview.nativeElement, "myClass")
    this._renderer.addClass(this.timePreview.nativeElement, "myClass")
  }


  // 
  toggleSettingPopover(){
    if(this.settingPopoverFlag){
      this.settingPopoverFlag = false
      this.settingMenuPopoverFlag = true;
      this.settingSpeedPopoverFlag = false;
      this.settingQualityPopoverFlag = false;
    }else{
      this.settingPopoverFlag = true
    }
  }

  showSetting_speed_popover(){
    this.settingMenuPopoverFlag = false;
    this.settingSpeedPopoverFlag = true;
  }

  showSetting_quality_popover(){
    this.settingMenuPopoverFlag = false;
    this.settingQualityPopoverFlag = true
  }

  backToSettingPopover(){
    this.settingMenuPopoverFlag = true;
    this.settingSpeedPopoverFlag = false;
    this.settingQualityPopoverFlag = false;
  }
  

}
