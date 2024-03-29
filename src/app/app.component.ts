import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MYANGULARCODEBANK12';

  

  message:any = null;
  
  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }

  constructor(private router:Router){

  }

  pageRedirect(data:any){
    this.router.navigate([data]);
  }

 

}
