import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-entradas',
  templateUrl: './ver-entradas.component.html',
  styleUrls: ['./ver-entradas.component.css']
})
export class VerEntradasComponent implements OnInit {

  entradas: Array<any>;
  constructor(public publicacionSv: PublicacionService, public route: Router) { }

  ngOnInit() {
    this.publicacionSv.obtenerEntradas().then((entradas: any) => {
      console.log(entradas);
      this.entradas = entradas;
    });
  }

  verEntrada(entrada) {
    const id = entrada.id;
    this.route.navigateByUrl('entradas', {queryParams: {id}});
  }

}
