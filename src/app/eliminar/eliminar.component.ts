import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { EditarComponent } from '../editar/editar.component';
import { Inject } from '@angular/core'; import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface Datos {
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string
}
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  eliminado = this.data;
  nav: any

  constructor(private router: Router, private dialogRef: MatDialogRef<EliminarComponent>, @Inject(MAT_DIALOG_DATA) public data: Datos) {
    /* this.nav = this.router.getCurrentNavigation(); */
  }

  ngOnInit(): void {

  }

  /* Envia dato a eliminar  a home  */
  eliminarElemento() {

    if (this.eliminado !== null) {
      let objToSend: NavigationExtras = {
        queryParams: {
          usuario: this.eliminado
        },
        skipLocationChange: false,
        fragment: 'top'
      };
      this.redirectTo('/home', objToSend);
      this.dialogRef.close();

      this.dialogRef.close(true);
    }

  }

  redirectTo(uri: string, objToSend: NavigationExtras) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri], { state: { deleteUser: objToSend } }));
  }
  onCancelar() {
    this.dialogRef.close(false);

  }
}












