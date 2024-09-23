import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuariosComponent } from '../dialog-usuarios/dialog-usuarios.component';
import { ActividadPageComponent } from '../actividad-page/actividad-page.component';
import { Usuario } from './user.model';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  errorMessage: string = '';
  loading: boolean = true;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    const filtro = {
      idsigma: "752",
      dusuari: "",
      dhostname: "",
      coficin: "054",
      DAREAS: "SUBGERENCIA DE SERVICIOS SOCIALES",
      dnomusu: "MDELGADO",
      ldesact: "1"
    };

    this.loading = true;
    this.dataService.listarUsuarios(filtro).subscribe(
      data => {
        this.usuarios = data;
        this.loading = false;
      },
      error => {
        console.error('Error al obtener usuarios', error);
        this.errorMessage = 'No se pudieron cargar los usuarios. Intente más tarde.';
        this.loading = false;
      }
    );
  }

  editarHost(usuario: Usuario) {
    const dialogRef = this.dialog.open(DialogUsuariosComponent, {
      width: '250px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para actualizar el usuario después de editar el host
        console.log('Host editado:', result);
      }
    });
  }

  editarActividad(usuario: Usuario) {
    const dialogRef = this.dialog.open(ActividadPageComponent, {
      width: '250px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para actualizar el estado de la actividad
        console.log('Actividad editada:', result);
      }
    });
  }
}
