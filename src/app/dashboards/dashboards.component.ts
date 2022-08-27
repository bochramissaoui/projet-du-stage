import { Component, OnInit } from '@angular/core';

import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css'],
})
export class DashboardsComponent implements OnInit {
  role = '';

  constructor( private jwtService: JwtService) { }

  ngOnInit(): void {
  }

}
