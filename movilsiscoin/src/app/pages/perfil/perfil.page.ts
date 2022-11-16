import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  usuario2: string;
  constructor() { }
  public User: any;
  public Correo: any;
  public telefono: any;
  ngOnInit() {
    this.User = localStorage.getItem('nombre');
    this.Correo = localStorage.getItem('correo');
    this.telefono = localStorage.getItem('telefono')
  }
  
/*   ngOnInit() {
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    if (this.usuario.id_clientesmovil) {
      if (this.usuario.id_clientesmovil.nombre) {
        this.usuario2 = this.usuario.id_clientesmovil.usuario;
      } else {
        this.usuario2 = this.usuario.usuario;
      }
    } else {
      this.usuario2 = this.usuario.usuario;
    }
  }
 */

}
