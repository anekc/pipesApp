import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  ordenarPor = '';
  enMayusculas = false;
   heroes: Heroe[] = [

  {
   nombre: 'SuperMan',
   vuela: true,
   color: Color.azul
  },

  {
    nombre: 'Robin',
    vuela: false,
    color: Color.rojo
  },


  {
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  }
];


  cambiarMayus(): void{
this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
