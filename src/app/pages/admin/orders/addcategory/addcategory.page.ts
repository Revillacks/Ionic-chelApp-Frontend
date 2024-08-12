import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.page.html',
  styleUrls: ['./addcategory.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddcategoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
