import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
     this.clientes.shift();
  }

  cambiarNombre(){
    this.nombre= 'María'
    this.genero ='femenino'
  }

  //KeyValuePipe

  persona = {
    nombre: 'Alejandro',
    edad: 26,
    direccion: 'Vancouver, Canada'
  }

  //json pipe

  heroes = [
    {
      nombre: 'Supermam',
      vuela: false
    },

    {
      nombre: 'Spiderman',
      vuela: false
    },

    {
      nombre: 'Aquaman',
      vuela: false
    }

  ];

  // async pipe

  mibservable = interval(1000);

  valorPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve ('Tenemos data en la promesa');
  }, 3500);


});

}
