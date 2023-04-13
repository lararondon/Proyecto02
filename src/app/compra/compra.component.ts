import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  correo: string=""
  direccion: string=""
  telefono: string=""
  comunidad: string=""
  pago:string = ""
  aceptar:boolean=false
  mensaje_aceptar=""
  mensaje=""

  enviar(){
    if(this.aceptar != true){
      this.mensaje_aceptar="No se han aceptado los términos"
    }
    else{
      this.mensaje_aceptar="Se han aceptado los términos"
    }

    this.mensaje="Datos enviados :"+this.correo+","+this.direccion+","+this.telefono+","+this.comunidad+","+this.pago+","+this.mensaje_aceptar;
  }
}
