import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDropdownComponent,
    SpeechRecognitionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
