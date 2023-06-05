import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

    logeado: boolean = false

    usuario: string = '';

    constructor(private router: Router){}

    ngOnInit() {

      if(localStorage.getItem('usuario') !== ''){
        this.logeado = true
        this.usuario = localStorage.getItem('usuario') || ''
      }

    }

    logOut() {

      if(localStorage.getItem('usuario') !== ''){
        console.log('deslogin')
        this.logeado = false
        this.usuario = ''
        localStorage.removeItem('usuario')
        this.router.navigate([''])
      }

    }

}
