import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(
    public jwtHelper: JwtHelperService,
    private localStorageService: LocalStorageService
  ) {}

  // Check token expiration date
  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  // Get the role name
  getRoleName(token: string): string {
    const tokenPayload = this.jwtHelper.decodeToken(token);
    return tokenPayload.role.authority;
  }

  // Decode the token to get its payload
  getTokenPayload(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }

  getToken(): string {
    const currentUser = JSON.parse(this.localStorageService.getItem('currentUser'));
    return currentUser.token;
  }

  getEmail(): string {
    const token = JSON.parse(this.localStorageService.getItem('currentUser')).token;
    const tokenPayload = this.jwtHelper.decodeToken(token);
    return tokenPayload.sub;
  }
}
