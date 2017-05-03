import { Component } from '@angular/core';
import { HolidayService } from './holiday.service';
import 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/Router';

@Component({
  selector: 'holiday',
  template: `
    <div *ngFor="let v of values">
        Name : {{v.name}}
        Date : {{v.date}}
        Observed : {{v.observed}}
        Public: {{v.public}}
    </div>
  
  `,
})

export class HolidayDetails  { 
  private holidayLinks;
  private values;
  
  
    
  constructor(private holidayS: HolidayService,
      private route: Router,
      private activatedRoute: ActivatedRoute) {
      
    this.holidayS.getAll().subscribe(data => {
          this.holidayLinks = Object.keys(data.holidays);
          let link  = this.route.snapshot.params();
          this.values = data.holidays[link];
          });
  
}
}
