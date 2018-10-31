import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-entradas',
  templateUrl: './ver-entradas.component.html',
  styleUrls: ['./ver-entradas.component.css']
})
export class VerEntradasComponent implements OnInit {
  public loading = false;

  entradas: Array<any>;
  constructor(public publicacionSv: PublicacionService, public route: Router) { }

  ngOnInit() {
    this.loading = true;

    this.publicacionSv.obtenerEntradas().then((entradas: any) => {
      console.log(entradas);
      this.entradas = entradas;
      this.loading = false;
    });
  }

  verEntrada(entrada) {
    const id = entrada.id;
    this.route.navigateByUrl('entradas', {queryParams: {id}});
  }

}
