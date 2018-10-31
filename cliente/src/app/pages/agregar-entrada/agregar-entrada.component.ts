import { PublicacionService } from './../../services/publicacion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-entrada',
  templateUrl: './agregar-entrada.component.html',
  styleUrls: ['./agregar-entrada.component.css'],
})
export class AgregarEntradaComponent implements OnInit {
  // Definimos las variables de la publicación que serán bindeadas por el cliente al completar el formulario
  titulo: string;
  contenido: string;
  imagen: File = null;
  constructor(
    public publicacionService: PublicacionService,
    public router: Router
  ) {}

  ngOnInit() {}

  // Aquí podemos acceder a un listado de los archivos subidos, y seleccionamos el primero
  // Recuerden que se empieza a contar desde 0 en la mayoría de los lenguajes de programación, por ello el 0
  guardarImagenEnVariable(files: FileList) {
    console.log(files);
    this.imagen = files.item(0);
  }

  publicar() {
// Llamamos al método de publicar entrada, y le enviamos el título, contenido e imagen de la publicación a crear
// Esto devuelve una promesa que podremos manejar en cualquier situación (then y catch)
    this.publicacionService
      .publicarEntrada(this.titulo, this.contenido, this.imagen)
      .then(() => {
        // Si fué publicado correctamente, mostramos una alerta al usuario y lo llevamos al inicio
        alert('Publicada correctamente!');
        this.router.navigateByUrl('inicio');
      })
      .catch(() => {
        // En el caso de que haya un error, mostramos un mensaje al usuario y lo devolvemos a su perfil
        alert('Hubo un error publicando!');
        this.router.navigateByUrl('perfil');
      });
  }
}
