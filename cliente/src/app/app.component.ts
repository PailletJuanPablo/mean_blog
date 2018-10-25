import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userSv: UserService, public router: Router) {
  }

  get logged() {
    return this.userSv.logueado;
  }

  cerrarSesion() {
    this.userSv.cerrarSesion();
    this.router.navigateByUrl('inicio');
  }


}
