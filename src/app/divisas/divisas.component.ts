import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {

  euros: number=0
  moneda="libra"
  resultado:number=0

  cambiar_moneda(){
    
    switch(this.moneda){
      case("libra"):
          this.resultado=this.euros*0.88;
          break;
      case("dolar"):
          this.resultado=this.euros*1.10;
          break;
      case("yen"):
          this.resultado=this.euros*146.70;
          break;
      default:
        break;
    }

  }

}
