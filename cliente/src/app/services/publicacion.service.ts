import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(public http: HttpClient) { }

  publicarEntrada(titulo, contenido, imagen) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Authorization': token});
    const formData = new FormData();
    formData.append('imagen', imagen, imagen.filename);
    formData.append('titulo', titulo);
    formData.append('contenido', contenido);
    headers.append('authorization', token);

     return this.http.post('http://localhost:1234/publicaciones', formData, {headers} ).toPromise();
  }

  obtenerEntradas() {
    return this.http.get('http://localhost:1234/publicaciones').toPromise();
  }

  eliminarPublicacion(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Authorization': token});
    return this.http.post('http://localhost:1234/publicaciones/eliminar/', {id}, {headers}).toPromise();
  }
}
