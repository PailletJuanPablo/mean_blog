import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-ver-entrada',
  templateUrl: './ver-entrada.component.html',
  styleUrls: ['./ver-entrada.component.css']
})
export class VerEntradaComponent implements OnInit {

  public id;
  publicacion;
  constructor(public route: ActivatedRoute, public publicacionService: PublicacionService) { }

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
      this.publicacionService.obtenerEntrada(parametros.id).then((publicacion) => {
        this.publicacion = publicacion;
        console.log(this.publicacion);
      });
    });
  }

}
