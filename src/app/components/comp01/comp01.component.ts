import { Component, OnInit } from '@angular/core';
import { Contacto } from './Contacto';

@Component({
  selector: 'comp01',
  templateUrl: './comp01.component.html',
  styleUrls: ['./comp01.component.css']
})
export class Comp01Component implements OnInit {

  public title:string;
  public flag:boolean;
  public contactos:Array<any> = [];

  constructor() {
      this.title = "Componente de Prueba";
      this.flag = false;
  }

  ngOnInit(): void {
      this.contactos.push(new Contacto(1,"Daniel Mauricio","Díaz Forero","d4nd14z@yahoo.com","Calle 11 # 22 - 33","3000010002"));
      this.contactos.push(new Contacto(2,"Ingrid Tatiana","Gómez Gamboa", "ingrid@starmedia.net","Cra 11 # 22 - 33","3100010002"));
  }

  //Muestra un mensaje al hacer click en el botón.
  mostrarElementos(){
      if (this.flag == false){
          this.flag = true;
      }
      else if(this.flag == true){
          this.flag = false;
      }
  }

}
