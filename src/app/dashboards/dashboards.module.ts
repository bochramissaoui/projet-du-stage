import { CommonModule } from '@angular/common';


import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MarkerService } from '../marker.service';
import { AdminComponent } from './admin/admin.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';

@NgModule({
  declarations: [ AdminComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
 
  ],
  providers: [MarkerService]
})
export class DashboardsModule {}
