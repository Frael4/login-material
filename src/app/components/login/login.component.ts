import { Component } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router, private auth: AuthService) {
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

    this.auth.logeado = true
    this.auth.usuario = this.usuario.value?.user || ''
    localStorage.setItem('usuario', this.auth.usuario)
    this.router.navigate(['home'])
  }


}
