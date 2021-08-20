import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
