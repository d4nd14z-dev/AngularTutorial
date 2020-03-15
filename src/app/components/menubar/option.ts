/********
export class Option {

    public titulo:string;
    public url:string;

    constructor(titulo:string, url:string){
        this.titulo = titulo;
        this.url = url;
    }

    setTitulo(titulo:string) {
        this.titulo = titulo;
    }

    getTitulo():string {
        return this.titulo;
    }

    setUrl(url:string) {
        this.url = url;
    }

    getUrl():string {
        return this.url;
    }

}
********/

export class Option {

    constructor(
        public title:string,
        public url:string
    ){}

}