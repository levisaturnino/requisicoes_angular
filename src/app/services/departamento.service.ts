import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento.model';
import { ServiceFirebase } from '../core/ iservicefirebase.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService extends ServiceFirebase<Departamento>
{
constructor(firestore: AngularFirestore) {
super( Departamento, firestore, 'departamentos' );
}
}
