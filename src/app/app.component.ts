import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MYANGULARCODEBANK12';

  constructor(private router:Router){

  }

  pageRedirect(data:any){
    this.router.navigate([data]);
  }
}
