import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  resultado: string ="" ;
  mostrar:boolean= false ;
  mimemoria:string;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(miNumero: string ){
      this.resultado=this.resultado+miNumero;
      this.mostrar=false ;
    }
     
    igual(){
      if(this.resultado!="") {
         this.resultado=eval(this.resultado);
         this.mostrar=true ;
      }
    }
    CE(){
      this.resultado="";
      this.mostrar=false ;
    }
    
    backespace(){
      this.resultado=this.resultado.substring(0,this.resultado.length-1)
      this.mostrar=false ;
    }
 
    memoria(){
      this.mimemoria=this.resultado
      this.mostrar=false ;
    }
    memoriaresultado(){
      this.resultado=this.resultado+this.mimemoria
      this.mostrar=false ;
    }
    memoriaborrar(){
      this.mimemoria="";
      this.mostrar=false ;
    }      
}
