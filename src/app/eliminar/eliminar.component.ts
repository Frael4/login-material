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

 
  constructor(private router: Router, private dialogRef: MatDialogRef<EditarComponent>, @Inject(MAT_DIALOG_DATA) public data: Datos) { }

 ngOnInit(): void {
  
}
  eliminarElemento(){

    this.dialogRef.close(true);
  }

  onCancelar(){
    this.dialogRef.close(false);

  }
}


   









