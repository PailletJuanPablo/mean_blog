import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public logged;
  constructor(public userSv: UserService, public router: Router) { }

  ngOnInit() {
  }

  probarLogin() {
  this.userSv.login(this.email, this.password)
  .then((ok) => {
    console.log('Ingresó correctamente');
    this.router.navigateByUrl('perfil');
  });
  }

}
