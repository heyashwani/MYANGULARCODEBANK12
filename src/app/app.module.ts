import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCrouselComponent } from './slick-crousel/slick-crousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlCrouselComponent } from './owl-crousel/owl-crousel.component';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { AgmCoreModule } from '@agm/core';
import { VideoPlayerComponent } from './video-player/video-player.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
initializeApp(environment.firebase);

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


import {MatIconModule} from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { VideoTestComponent} from './video-test/video-test.component'


@NgModule({
  declarations: [
    AppComponent,
    CountryDropdownComponent,
    SpeechRecognitionComponent,
    LoadingBarComponent,
    TimePickerComponent,
    SlickCrouselComponent,
    OwlCrouselComponent,
    AgmMapComponent,
    VideoPlayerComponent,
    VirtualScrollComponent,
    VideoTestComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    SlickCarouselModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBUkyuGdePPVO7oCQp3r3IcYyvHwdf0vcw'
    }),
    ScrollingModule,
    SocialLoginModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
    
],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // '632570983894-o5f77ong47uacvg6h23636aevuvucfj0.apps.googleusercontent.com'
              '312897153603-m7r1cikgc63r8hgrivq7pjsavkrb7uhn.apps.googleusercontent.com'
              
              )
          },
          
        ],
        onError: (err) => {
          console.error("ddd",err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
