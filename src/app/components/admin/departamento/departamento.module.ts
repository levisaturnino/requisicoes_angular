import { ComumModule } from './../../../modules/comum/comum.module';
import { NgModule } from '@angular/core';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentoModule { }
