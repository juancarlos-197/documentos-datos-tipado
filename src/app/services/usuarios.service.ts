import { ReqResResponse, Usuario } from './../models';
import { HttpClient } from '@angular/common/http/';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {
  }


  cargarUsuarios() {
    const url = 'https://reqres.in/api/users?page=2';
    return this.http.get<ReqResResponse>(url)
      .pipe(
        map(resp => {
          return resp.data.map(user => {
            return new Usuario(user.id, user.email, user.first_name, user.last_name, user.avatar)
          });
        })
      )
  }
}
