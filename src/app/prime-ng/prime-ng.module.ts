import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
  exports: [ButtonModule,
    CardModule, MenubarModule, FieldsetModule, ToolbarModule, TableModule]
})
export class PrimeNgModule { }
