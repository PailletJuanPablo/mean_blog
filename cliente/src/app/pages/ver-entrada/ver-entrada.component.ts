import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-entrada',
  templateUrl: './ver-entrada.component.html',
  styleUrls: ['./ver-entrada.component.css']
})
export class VerEntradaComponent implements OnInit {

  public id;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.route.snapshot);
  }

}
