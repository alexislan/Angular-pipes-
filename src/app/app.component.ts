import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan america';
  nombre2: string = 'AlExIs LancHiotTi';
  PI : number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  heroe = {
    nombre: 'logan',
    edad: 50
  }
  valorPromesa = new Promise <string> ((resolve) => {
    setTimeout(() => {
      resolve('llego la data')
    }, 4500);
  })
  fecha: Date = new Date();
}
