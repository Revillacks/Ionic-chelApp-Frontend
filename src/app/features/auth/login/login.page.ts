import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonIcon, IonButton, IonInput, IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {add, eyeOffOutline, eyeOutline, lockClosedOutline, mailOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [RouterLink,IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonCol, IonRow, IonGrid, IonInput, IonButton, IonIcon, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule],
})
export class HomePage {
  private router:Router = inject(Router);
  formLogin! : FormGroup;
  showPassword: boolean = false;
  passsInputType: string = "";

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

    this.passsInputType = 'password';
  }

  toggleShow(){
    this.showPassword = !this.showPassword;

    if(this.passsInputType === 'password'){
      this.passsInputType = 'text';
    }else{
    this.passsInputType = 'password';
    }
  }

  isValidControl(ctrl: string){
    return this.formLogin.controls[ctrl] && (this.formLogin.controls[ctrl].touched || this.formLogin.controls[ctrl].dirty) ;
  }

  getFieldError(field: string){
    if(!this.formLogin.controls[field]) return null;
    const errors = this.formLogin.controls[field].errors || {};

    for (const key of Object.keys(errors)){
      switch(key){
        case'required':
          return 'Este campo es obligatorio'
        case'minlength':
          return 'Minimo de caracteres requerido'
        case'maxlength':
          return 'Maximo de caracteres excedido'
        case'email':
          return 'Email no valido'
        case 'pattern':
          return 'Minimo una mayuscula y caracter especial'
      }
    }
    return null;
    }

  iniciar() {
    // Lógica para iniciar sesión
  }

}
