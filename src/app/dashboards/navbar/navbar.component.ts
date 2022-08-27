import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advertiser } from 'src/app/models/Advertiser.model';

import { Role } from '../../models/enum/role';
import { JwtService } from '../../services/jwt.service';
import { Constants } from '../../utils/constants';
import { LocationPartner } from '../../models/Location-partner.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  advertiser: Advertiser;
  locationPartner: LocationPartner;
  fileStorageURL = Constants.FILE_STORAGE_ENDPOINT;
  role = '';
  logoURL = '';
  isLoading = false;

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getCurrentUserInfo();
  }

  logout(): void {
    console.log('Logout');
    this.router.navigate(['/login']);

  }

  getCurrentUserInfo(): void {
    this.isLoading = true;
    this.role = Role.ADMIN;
  }
}
