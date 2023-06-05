import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  logeado: boolean;
  usuario: string = '';

  constructor(private router: Router) {
    this.logeado = false
  }

  ngOnInit() {
    this.logeado = false
    console.log(this.logeado)
    if (localStorage.getItem('usuario') !== null ) {
      console.log('login success')
      this.logeado = true
      this.usuario = localStorage.getItem('usuario') || ''
    }

  }

  logOut() {

    console.log(this.logeado)
    if (localStorage.getItem('usuario') !== '') {
      console.log('deslogin')
      this.logeado = false
      this.usuario = ''
      localStorage.removeItem('usuario')
      this.router.navigate([''])
    }

  }

}
