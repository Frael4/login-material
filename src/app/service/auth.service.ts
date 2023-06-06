import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  logeado: boolean = false;

  usuario: string = ''
  
  constructor() { }
}
