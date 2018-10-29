import { Component, OnInit } from '@angular/core';
import { PublicacionService } from './../../services/publicacion.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
publicaciones;
  constructor(private publisService: PublicacionService) { }

  ngOnInit() {
    this.publisService.obtenerEntradas().then((publicaciones) => this.publicaciones = publicaciones);
  }

  eliminar(id) {
    console.log(id);
    this.publisService.eliminarPublicacion(id).then((res) => console.log(res));
  }

}
