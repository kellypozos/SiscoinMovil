import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Perfil', url: '/perfil', icon: 'person-outline' },   
    { title: 'Cerrar sesión', url: '/login', icon: 'exit-outline' },
  ];
  constructor() { }
  public User: any;
  public Correo: any;
  ngOnInit() {
    this.User = localStorage.getItem('nombre');
    this.Correo = localStorage.getItem('correo');
    }
}
