import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picnic';

  constructor(public route : Router){
  }
  refreshHomePage(){
    this.route.navigate(['/'])
  }
}
