import { ReqResResponse } from './../../models/regres-response';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: any = []
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios
      });
  }

}
