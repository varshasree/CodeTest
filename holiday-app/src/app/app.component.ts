import { Component } from '@angular/core';
import { HolidayService } from './holiday.service';
import {Route, ActivatedRoute} from '@angular/Router';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `
    <ul>
    <li *ngFor="let link of holidayLinks"><a [RouterLink]="holiday/{{link}}>{{link}}</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent  { 
  private holidayLinks;
    
  constructor(private holidayS: HolidayService) {
      
      this.holidayS.getAll().subscribe(data => {
          this.holidayLinks = Object.keys(data.holidays);
          console.log(this.holidayLinks);
      });
      
  }
  
}
