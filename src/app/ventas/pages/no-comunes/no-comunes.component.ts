import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

// i18nPlural
clientes : string[] =['María', 'Pedro', 'Juan', 'Fernando'];
clientesMap = {
  '=0': 'no tenemos ningún cliente esperando',
  '=1': 'tenemos 1 cliente esperando', 
  'other': 'tenemos  # clientes esperando'
}
  // i18nSelect
  nombre: string = 'Alejandro';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino':'invitarla'
  }

  quitarInvitados(){
    return this.clientes.shift();
  }

  cambiarNombre(){
    this.nombre= 'María'
    this.genero ='femenino'
  }

}
