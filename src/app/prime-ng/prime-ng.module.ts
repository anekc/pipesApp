import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@NgModule({
  exports: [ButtonModule,
    CardModule, MenubarModule, FieldsetModule]
})
export class PrimeNgModule { }
