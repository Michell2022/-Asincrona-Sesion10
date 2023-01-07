import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrardatos',
  templateUrl: './mostrardatos.component.html',
  styleUrls: ['./mostrardatos.component.css']
})
export class MostrardatosComponent {


  @Input() 
  recibidoDePadre!: string;
  
  constructor() {}
}
