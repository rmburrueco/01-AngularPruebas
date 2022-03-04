import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent implements OnInit {
  
  colorLocal:String = '';
  constructor() { }

  ngOnInit(): void {
  }

  generarRandom():String{
    return Math.floor( Math.random() * 255).toString(16);
  }

  //Genera un color aleatorio en formato hexadecimal
  colorHex():String{
    this.colorLocal = "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
    return this.colorLocal;
  }

}
