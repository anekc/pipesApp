import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  exports: [ButtonModule,
    CardModule],
  declarations: [],
  imports: [
    CommonModule
    
  ]
})
export class PrimeNgModule { }
