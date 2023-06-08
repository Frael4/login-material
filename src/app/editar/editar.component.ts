import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Inject } from '@angular/core'; import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Datos {
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string
}

@Component({
  selector: 'app-editar',
  templateUrl: './Editar.component.html',
  styleUrls: ['./Editar.component.css']
})
export class EditarComponent implements OnInit {

  usuarioNuevo: any
  usuario = this.data
  constructor(private router: Router, private dialogRef: MatDialogRef<EditarComponent>, @Inject(MAT_DIALOG_DATA) public data: Datos) { }

  ngOnInit(): void {
    this.usuarioNuevo = new FormGroup({
      name: new FormControl(this.usuario?.name, Validators.required),
      username: new FormControl(this.usuario?.username, Validators.required),
      email: new FormControl(this.usuario?.email, Validators.required),
      telefono: new FormControl(this.usuario?.phone, Validators.required),
      website: new FormControl(this.usuario?.website, Validators.required)
    })
  }


  onSubmit() {

    if (this.usuarioNuevo.value.name == '' || this.usuarioNuevo.value.username == '') {
      return;
    }

    //console.log(this.usuarioNuevo.value)
    let objToSend: NavigationExtras = {
      queryParams: {
        name: this.usuarioNuevo.value.name,
        username: this.usuarioNuevo.value.username,
        email: this.usuarioNuevo.value.email,
        telefono: this.usuarioNuevo.value.telefono,
        website: this.usuarioNuevo.value.website
      },
      skipLocationChange: false,
      fragment: 'top'
    };
    this.redirectTo('/home', objToSend);
    this.dialogRef.close();
  }

  redirectTo(uri: string, objToSend: NavigationExtras) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri], { state: { editUser: objToSend } }));
  }

  cancelar() {
    this.dialogRef.close();
  }

}
