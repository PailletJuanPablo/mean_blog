import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class VerificarLogueadoService implements CanActivate {
  constructor(public router: Router, public userSv: UserService) {

  }
  canActivate(): boolean {
    console.log('Se verificó ruta');
    if (!this.userSv.logueado) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
