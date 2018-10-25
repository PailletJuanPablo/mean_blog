import { PublicacionService } from './services/publicacion.service';
import { VerificarLogueadoService } from './services/verificar-logueado.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AgregarEntradaComponent } from './pages/agregar-entrada/agregar-entrada.component';
import { EditarEntradaComponent } from './pages/editar-entrada/editar-entrada.component';
import { VerEntradasComponent } from './pages/ver-entradas/ver-entradas.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { Routes, CanActivate, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const RUTAS: Routes = [
  { path: '', component: VerEntradasComponent },
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: MiPerfilComponent, canActivate: [VerificarLogueadoService] },
  { path: 'publicar', component: AgregarEntradaComponent, canActivate: [VerificarLogueadoService] },
  { path: 'editar', component: EditarEntradaComponent, canActivate: [VerificarLogueadoService] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgregarEntradaComponent,
    EditarEntradaComponent,
    VerEntradasComponent,
    MiPerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS),
    HttpClientModule,
    FormsModule
  ],
  providers: [VerificarLogueadoService, UserService, PublicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
