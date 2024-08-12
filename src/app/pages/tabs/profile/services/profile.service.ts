import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getUserInfo() {
    const user = JSON.parse(localStorage.getItem('USER') ?? '[]')
    return user
  }
}
