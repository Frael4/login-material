import { Component } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router) {
  }

  alert: boolean = false

  usuario = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login() {

    console.log(this.usuario.value.user)
    if (this.usuario.value.user == '' || this.usuario.value.password == '') {
      this.alert = true;
      return;
    }

    this.router.navigate(['home'])
    const usuario = this.usuario.value?.user || ''
    localStorage.setItem('usuario', usuario)
  }


}
