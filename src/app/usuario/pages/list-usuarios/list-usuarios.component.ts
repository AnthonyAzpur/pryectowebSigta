import { Component } from '@angular/core';
import { User } from './user.model'; // Ajusta la ruta según tu estructura de archivos

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent {
  displayedColumns: string[] = ['dni', 'name', 'area', 'host', 'acciones'];
  dataSource: User[] = [
    { dni: '12345678A', name: 'John Doe', area: 'Finanzas', host: 'Host1' },
    { dni: '23456789B', name: 'Jane Smith', area: 'Recursos Humanos', host: 'Host2' },
    { dni: '34567890C', name: 'Sam Wilson', area: 'IT', host: 'Host3' }
  ];
}

