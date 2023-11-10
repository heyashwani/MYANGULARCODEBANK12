import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmMapComponent } from './agm-map/agm-map.component';

import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { OwlCrouselComponent } from './owl-crousel/owl-crousel.component';
import { SlickCrouselComponent } from './slick-crousel/slick-crousel.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoTestComponent } from './video-test/video-test.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"country-dropdown",
    pathMatch:"full"
  },
  {
    path:"country-dropdown",
    component:CountryDropdownComponent
  },
  {
    path:"speech-recognition",
    component:SpeechRecognitionComponent
  },
  {
    path:"loading-bar",
    component:LoadingBarComponent
  },
  {
    path:"time-picker",
    component:TimePickerComponent
  },
  {
    path:"slick-crousel",
    component:SlickCrouselComponent
  },
  {
    path:"owl-crousel",
    component:OwlCrouselComponent
  },
  {
    path:"agm",
    component:AgmMapComponent
  },
  {
    path:"video-player",
    component:VideoPlayerComponent
  },
  {
    path:"virtual-scroll",
    component:VirtualScrollComponent
  },
  {
    path:"Video-Test",
    component:VideoTestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
