import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista [] = [];
  constructor() { 
    const lista1 = new Lista('recolectar basura');
    const lista2 = new Lista('Hacer tarea');
    this.listas.push(lista1);
    this.listas.push(lista2);
    console.log(this.listas);
  }
}
