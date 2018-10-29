import { PublicacionService } from './../../services/publicacion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-entrada',
  templateUrl: './agregar-entrada.component.html',
  styleUrls: ['./agregar-entrada.component.css'],
})
export class AgregarEntradaComponent implements OnInit {
  titulo: string;
  contenido: string;
  imagen: File = null;
  constructor(
    public publicacionService: PublicacionService,
    public router: Router
  ) {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    this.imagen = files.item(0);
  }

  publicar() {
    console.log(this.titulo);
    console.log(this.contenido);
    this.publicacionService
      .publicarEntrada(this.titulo, this.contenido, this.imagen)
      .then(() => console.log('publicado'))
      .catch(() => {
        this.router.navigateByUrl('perfil');
      });
  }
}
