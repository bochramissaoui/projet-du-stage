import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private http: HttpClient) {}

  saveItem(title: string, value: string): void {
    localStorage.setItem(title, value);
  }

  getItem(title: string): string {
    return localStorage.getItem(title);
  }

  clearItem(title: string): void {
    localStorage.removeItem(title);
  }

  clear(): void {
    localStorage.clear();
  }

}
