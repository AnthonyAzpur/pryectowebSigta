import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListUsuariosComponent } from './pages/list-usuarios/list-usuarios.component';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DialogUsuariosComponent } from './pages/dialog-usuarios/dialog-usuarios.component';


@NgModule({
  declarations: [
    ListUsuariosComponent,
    HomePageComponent,
    DialogUsuariosComponent,


  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
  ]
})
export class UsuariosModule { }
