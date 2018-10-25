import { PublicacionService } from './../../services/publicacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-entrada',
  templateUrl: './agregar-entrada.component.html',
  styleUrls: ['./agregar-entrada.component.css']
})
export class AgregarEntradaComponent implements OnInit {

  titulo: string;
  contenido: string;
  imagen: string;
  constructor(public publicacionService: PublicacionService) { }

  ngOnInit() {
  }

  publicar() {
    console.log(this.titulo);
    console.log(this.contenido);
    this.publicacionService.publicarEntrada(this.titulo, this.contenido);
  }

}
