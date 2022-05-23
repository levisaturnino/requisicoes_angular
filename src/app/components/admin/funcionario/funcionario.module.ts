import { FilterDepartamentoPipe } from './../../../pipes/filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComumModule } from './../../../modules/comum/comum.module';
import { NgModule } from '@angular/core';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FuncionarioComponent,
    FilterDepartamentoPipe],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    NgSelectModule,
    FuncionarioRoutingModule,

  ]
})
export class FuncionarioModule { }
