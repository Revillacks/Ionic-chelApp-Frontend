
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonIcon, IonButton, IonInput, IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { add, eyeOffOutline, eyeOutline, lockClosedOutline, mailOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonCol, IonRow, IonGrid, IonInput, IonButton, IonIcon, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule],
})
export class HomePage {
  private router: Router = inject(Router);
  formLogin!: FormGroup;
  showPassword: boolean = false;
  passsInputType: string = "password";
  alertController: AlertController = inject(AlertController);

  constructor(
    private fb: FormBuilder,
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(11)]],
    });

    addIcons({
      mailOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;

    if (this.passsInputType === 'password') {
      this.passsInputType = 'text';
    } else {
      this.passsInputType = 'password';
    }
  }

  isValidControl(ctrl: string) {
    return this.formLogin.controls[ctrl] && (this.formLogin.controls[ctrl].touched || this.formLogin.controls[ctrl].dirty);
  }

  getFieldError(field: string) {
    if (!this.formLogin.controls[field]) return null;
    const errors = this.formLogin.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return 'Mínimo de caracteres requerido';
        case 'maxlength':
          return 'Máximo de caracteres excedido';
        case 'email':
          return 'Email no válido';
        case 'pattern':
          return 'Mínimo una mayúscula y carácter especial';
      }
    }
    return null;
  }


  async iniciar(loginExitoso: boolean) {
    if (loginExitoso) {
      // Muestra un cuadro de mensaje de sesión exitosa
      const alert = await this.alertController.create({
        header: 'Sesión Exitosa',
        message: 'Has iniciado sesión correctamente.',
        buttons: [{
          text: 'OK',
          handler: () => {
            // Redirige a la tab2 después de cerrar la alerta
            this.router.navigate(['/tabs/tab2']);
          }
        }]
      });

      await alert.present();
    } else {
      // Muestra un cuadro de mensaje de error
      const alert = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message: 'Por favor, verifica tus credenciales e inténtalo de nuevo.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
  }

