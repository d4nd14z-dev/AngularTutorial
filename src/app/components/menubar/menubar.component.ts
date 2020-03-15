import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  public title:string = "D1Studios.Com";
  public options:Array<any> = [];
  
  constructor() { 
    //Se utliza para darle valor a las propiedades de la clase
    //Agregar elementos al array de opciones.
    //No se pueden llamar metodos. Unicamente settear las propiedades de la clase.
  }

  ngOnInit(): void {
    //Se utiliza para llamar metodos y hacer funcionalidades
    //Es el primer método que se va a llamar despues del constructor
    //En este si se pueden llamar metodos. 
    this.crearOpcion("Opcion 1","http://www.eltiempo.com");
    this.crearOpcion("Opcion 2","http://www.elespectador.com");
    this.crearOpcion("Opcion 3","http://www.elmundo.es");
    this.holaMundo();
  }

  //Crea las opciones del menu
  crearOpcion(titulo:string, url:string){
      let option:[string, string];
      option = [titulo, url];
      this.options.push(option);
  }

  //Muestra la ventana alert cuando se finaliza el constructor
  holaMundo(){
    alert("Hola Mundo !!!");
  }

}
