import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonIcon, IonButton, IonInput, IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Router, RouterLink } from '@angular/router';
import CryptoES from 'crypto-es'; // Importa desde crypto-es
import { callOutline, eyeOffOutline, eyeOutline, lockClosedOutline, mailOutline, peopleCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonNote, RouterLink, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonCol, IonRow, IonGrid, IonInput, IonButton, IonIcon, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule
  ],
})
export class RegisterPage {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });

    addIcons({
      peopleCircleOutline,
      mailOutline,
      lockClosedOutline,
      callOutline,
      eyeOffOutline,
      eyeOutline
    });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.get(passwordKey);
      const confirmPasswordInput = group.get(confirmPasswordKey);
      if (passwordInput?.value !== confirmPasswordInput?.value) {
        return confirmPasswordInput?.setErrors({ notEquivalent: true });
      } else {
        return confirmPasswordInput?.setErrors(null);
      }
    };
  }

  passwordsDoNotMatch() {
    const confirmPassword = this.registroForm.get('confirmPassword');
    return confirmPassword?.errors?.['notEquivalent'] && confirmPassword?.touched;
  }

  registrar() {
    if (this.registroForm.valid) {
      const formValues = this.registroForm.value;
      formValues.password = CryptoES.AES.encrypt(formValues.password, 'secret-key').toString();
      formValues.confirmPassword = CryptoES.AES.encrypt(formValues.confirmPassword, 'secret-key').toString();
      console.log('Form Values:', formValues);
    }
  }
}
