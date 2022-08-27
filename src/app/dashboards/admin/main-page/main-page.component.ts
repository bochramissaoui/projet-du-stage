import { Component, OnInit } from '@angular/core';

import { AdminMainDashboard } from '../../../models/dashboards/AdminMainDashboard.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  isLoading = false;
  mainDashboard: AdminMainDashboard;

  ngOnInit(): void {
    this.getMainDashboard();
  }

  getMainDashboard(): void{
    this.isLoading = true;
    console.log('Welcome');

  }
}
