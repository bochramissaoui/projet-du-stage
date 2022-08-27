import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MarkerService } from 'src/app/marker.service';


import { AdminRoutingModule } from './admin-routing.module';

import { ContactComponent } from './contact/contact.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, ContactComponent, CreateAdComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
   
  ],
  providers: [MarkerService]
})
export class AdminModule {}
