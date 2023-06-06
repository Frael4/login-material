import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  constructor(private router: Router, public auth: AuthService) {
   
  }

  ngOnInit() {
    
    console.log('este es el suario')
    console.log(this.auth.usuario)
    if (localStorage.getItem('usuario') !== null ) {
      console.log('login success')
      this.auth.logeado = true
      this.auth.usuario = localStorage?.getItem('usuario') || ''
    }

  }

  logOut() {

    if (localStorage.getItem('usuario') !== '') {
      console.log('deslogin')
      this.auth.logeado = false
      this.auth.usuario = ''
      localStorage.removeItem('usuario')
      this.router.navigate([''])
    }

  }

}
