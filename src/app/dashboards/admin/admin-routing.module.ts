import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContactComponent } from './contact/contact.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: "advertising-campaigns/create-ad",
    component: CreateAdComponent,
    loadChildren: () =>
      import('./create-ad/create-ad.module').then((m) => m.CreateAdModule),
  },

  /**
   * complete your paths!
   */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
