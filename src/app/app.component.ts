import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title        = '01-AngularPruebas';
  color:String = 'red';

  generarRandom():String{
    return Math.floor( Math.random() * 255).toString(16);
  }

  colorHex():String{
    return "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
  }

}
