import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { createOutline, listOutline, lockClosedOutline, moonOutline, sunnyOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage {

  public router = inject(Router)

  public isDarkTheme = false;
  public profileService = inject(ProfileService)

  user: any = {}

  constructor() {
    addIcons({
      createOutline, listOutline, lockClosedOutline, sunnyOutline, moonOutline
    })
    this.user = this.profileService.getUserInfo()
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark', this.isDarkTheme);
  }

  // Estas por si nos da tiempo de implementarlas
  editProfile() {}

  changePassword() {}

  viewOrders() {
    this.router.navigate(['/orders'])
  }
}
