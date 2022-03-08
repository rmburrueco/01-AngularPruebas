import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '01-AngularPruebas';
  libros: Array<any>;

  constructor() {
    this.libros = [
      {
        id: '1',
        titulo: 'El retrato de Dorain Gray',
        autor: 'Oscar Wilde'
      },
      {
        id: '2',
        titulo: 'La mejor inversión',
        autor: 'Desconocido'
      }
    ]
  }
}
