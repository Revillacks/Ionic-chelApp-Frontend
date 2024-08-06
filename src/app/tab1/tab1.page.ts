import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonIcon, IonButton, IonInput, IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
//   imports: [IonNote,
//     RouterLink,IonicModule,
//     IonCardContent,
//     IonCardTitle,
//     IonCardHeader,
//     IonCard,
//     IonImg,
//     IonCol,
//     IonRow,
//     IonGrid,
//     IonInput,
//     IonButton,
//     IonIcon,
//     IonItem,
//     IonLabel,
//     IonContent,
//     IonHeader,
//     IonTitle,
//     IonToolbar,
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule
// ],
})


export class Tab1Page {
  recommendedDrinks = [
    { name: 'Margarita', description: 'A refreshing tequila-based cocktail.' },
    { name: 'Mojito', description: 'A Cuban cocktail with rum and mint.' },
    // Más bebidas recomendadas
  ];

  constructor() {}
}
