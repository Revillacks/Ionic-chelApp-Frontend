import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { fileTrayStackedOutline, keyOutline, personCircleOutline } from 'ionicons/icons';

interface Rol {
  id: number;
  usuario: string;
  rol: string;
  email: string;
}

@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.page.html',
  styleUrls: ['./addroles.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  providers: [ModalController]
})
export class AddrolesPage implements OnInit {

  roles: Rol[] = [];
  roleForm: FormGroup;
  mostrarModal: boolean = false;
  rolSeleccionado: Rol | null = null;

  rolOptions = {
    header: 'Selecciona rol'
  }

  constructor(private formBuilder: FormBuilder) {
    this.roleForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      rol: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Corregido
    });


    addIcons({
      keyOutline,
      personCircleOutline,
      fileTrayStackedOutline}
    )
  }


  ngOnInit() {
    // Cargar roles desde localStorage
    const rolesGuardados = localStorage.getItem('roles');
    if (rolesGuardados) {
      this.roles = JSON.parse(rolesGuardados);
    } else {
      // Cargar roles iniciales (simulación)
      this.roles = [
        { id: 1, usuario: 'Ale', rol: 'Admin', email: 'xagacia.03@gmail.com' },
        { id: 2, usuario: 'Ale', rol: 'User', email: 'xagsdmksmd3@gmail.com' },
      ];
    }
  }

  nuevoRol() {
    this.rolSeleccionado = null;
    this.roleForm.reset();
    this.mostrarModal = true;
  }

  editarRol(rol: Rol) {
    this.rolSeleccionado = rol;
    this.roleForm.patchValue(rol);
    this.mostrarModal = true;
  }

  borrarRol(id: number) {
    this.roles = this.roles.filter(p => p.id !== id);

    // Actualizar localStorage
    localStorage.setItem('roles', JSON.stringify(this.roles));
  }

  guardarRol() {
    if (this.roleForm.invalid) {
      return;
    }

    const nuevoRol = this.roleForm.value as Rol;

    if (this.rolSeleccionado) {
      const index = this.roles.findIndex(p => p.id === this.rolSeleccionado!.id);
      this.roles[index] = { ...nuevoRol, id: this.rolSeleccionado.id };
    } else {
      nuevoRol.id = this.roles.length > 0 ? Math.max(...this.roles.map(p => p.id)) + 1 : 1;
      this.roles.push(nuevoRol);
    }

    // Guardar en localStorage
    localStorage.setItem('roles', JSON.stringify(this.roles));

    console.log('Rol guardado:', nuevoRol);
    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  getIconoRoles(rol: string): string {
    switch (rol.toLowerCase()) {
      case 'admin':
        return "key-outline";
      case 'user':
        return "person-circle-outline"; // Usa 'pizza-outline' si está disponible; de lo contrario, usa un icono alternativo.
      default:
        return 'file-tray-stacked-outline'; // Icono predeterminado
    }
  }
}
