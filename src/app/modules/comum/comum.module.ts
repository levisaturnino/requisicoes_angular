import { PrimeNGModule } from './../prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ]
})
export class ComumModule { }
