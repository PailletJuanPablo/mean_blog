import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(public http: HttpClient) { }

  publicarEntrada(titulo, contenido) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Authorization': token});

    headers.append('authorization', token);
    const body = {
      titulo,
      contenido
    };
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:1234/publicaciones', body, {headers}).toPromise()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    });
  }
}
