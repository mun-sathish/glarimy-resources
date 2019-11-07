import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
  getTitle(): string {
    return 'Rocket Launching Station';
  }
}
