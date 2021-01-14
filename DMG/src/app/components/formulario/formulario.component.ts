import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form_number: number;
  form_fecha: Date;
  form_descripcion: string;
  email:string;
  mostrar:boolean;
  titulo: string;
  constructor() { }

  ngOnInit(): void {
     this.titulo = 'MOSTRAR DATOS!!!';
  }

  show(){
    this.mostrar = true;
  }

  clean(){
    this.mostrar = false;
  }

}
