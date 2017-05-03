import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {HolidayService} from './holiday.service';
import {HolidayDetails} from './holiday.details';
import { AppComponent }  from './app.component';
import { RouterModule, Routes }  from '@angular/router';


const appRoutes: Routes = [
{path: '', component: AppComponent},
{ path: 'holiday/:name', component: HolidayDetails}
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HolidayDetails ],
  providers: [HolidayService],
  bootstrap:    [ AppComponent ]
 })
 
export class AppModule { }
