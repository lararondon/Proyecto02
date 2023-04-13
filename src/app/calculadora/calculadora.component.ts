import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number=0;
  num2:number=0
  resultado:number=0
  
  sumar(){
    this.resultado = this.num1+this.num2
  }

  restar(){
    this.resultado = this.num1-this.num2
  }

  mult(){
    this.resultado = this.num1*this.num2
  }

 dividir(){
    this.resultado = this.num1/this.num2
  }
}
