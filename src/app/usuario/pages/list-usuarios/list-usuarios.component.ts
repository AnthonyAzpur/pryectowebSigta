import { Component, ViewChild, OnInit } from '@angular/core';
import { User } from './user.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['dni', 'name', 'area', 'host', 'acciones'];
  dataSource = new MatTableDataSource<User>([
    { dni: '12345678A', name: 'John Doe', area: 'Finanzas', host: 'Host1' },
    { dni: '23456789B', name: 'Jane Smith', area: 'Recursos Humanos', host: 'Host2' },
    { dni: '34567890C', name: 'Sam Wilson', area: 'IT', host: 'Host3' },
    // Agrega más registros si es necesario
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filterValue: string = '';

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  editUser(user: User) {
    console.log('Editar usuario:', user);
  }

  deleteUser(user: User) {
    console.log('Eliminar usuario:', user);
  }
}
