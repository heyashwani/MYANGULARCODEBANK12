import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

declare var google: any;


@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  user: any;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user:any) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("user",user)
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

}
