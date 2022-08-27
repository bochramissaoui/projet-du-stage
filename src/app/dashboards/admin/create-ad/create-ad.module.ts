import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdComponent } from './create-ad.component';
import { CreateAdRoutingModule } from './create-ad-routing.module';


import { MapComponent } from './map/map.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/marker.service';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  
])
@NgModule({
  declarations: [MapComponent, ],
  imports: [
    CommonModule,
    CreateAdRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule 
  ],
  providers : [MarkerService]
})
export class CreateAdModule { }
