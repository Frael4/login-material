import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Datos {
  name: string,
  username: string,
  email: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dataSource: any = []
  displayedColumns: string[] = ['name', 'username', 'email', 'phone', 'website'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataFromAPIFake();
  }

  getDataFromAPIFake() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.dataSource = data
        /* this.dataSource = new MatTableDataSource<Datos>(data as Datos[]); */
        console.log(this.dataSource)
      },
      error => {
        console.log(error)
      }
    )
  }
}
