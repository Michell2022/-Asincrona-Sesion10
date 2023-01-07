import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ingresadatos',
  templateUrl: './ingresadatos.component.html',
  styleUrls: ['./ingresadatos.component.css']
})
export class IngresadatosComponent {


  recibidoDePadre!: string;
  padreForm: FormControl = new FormControl();
  
  btnEnviarHijo() {
    this.recibidoDePadre = this.padreForm.value;
  }
}
