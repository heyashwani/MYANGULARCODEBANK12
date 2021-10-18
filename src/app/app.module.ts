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
    VirtualScrollComponent
    
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
    ScrollingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
