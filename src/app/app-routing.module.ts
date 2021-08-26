import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { OwlCrouselComponent } from './owl-crousel/owl-crousel.component';
import { SlickCrouselComponent } from './slick-crousel/slick-crousel.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
