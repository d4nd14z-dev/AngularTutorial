import { Component, OnInit } from '@angular/core';
import { Option } from './option'; //Importar un modelo propio que esta creado dentro del mismo componente ("options.ts")

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  public title:string;
  public options:Array<any>;
  public searchString:string;
  
  constructor() { 
    //Se utliza para darle valor a las propiedades de la clase
    //Agregar elementos al array de opciones.
    //No se pueden llamar metodos. Unicamente settear las propiedades de la clase.
    this.title = "D1Studios.Com";
    this.options = [];
    this.searchString = "";
  }

  ngOnInit(): void {
    //Se utiliza para llamar metodos y hacer funcionalidades
    //Es el primer método que se va a llamar despues del constructor
    //En este si se pueden llamar metodos. 
    this.crearOpcionModelo("El Tiempo","http://www.eltiempo.com");
    this.crearOpcionModelo("El Espectador","http://www.elespectador.com");
    this.crearOpcionModelo("El Mundo","http://www.elmundo.es");
    //this.holaMundo();
  }

  //Crea las opciones del menu (Utilizando un modelo)
  crearOpcionModelo(titulo:string, url:string){
      let option:Option = new Option(titulo, url);
      this.options.push(option);
  }

  //Crea las opciones del menu (Utilizando tuplas)
  crearOpcion(titulo:string, url:string){
      let option:[string, string]; //Definicion de la tupla
      option = [titulo, url];
      this.options.push(option);
  }

  //Realiza la busqueda cuando se hace click en el boton "Search" de la barra del menu
  realizarBusqueda(){
      alert("Buscar: " + this.searchString);
  }

  //Muestra la ventana alert cuando se finaliza el constructor
  holaMundo(){
    alert("Hola Mundo !!!");
  }

}
