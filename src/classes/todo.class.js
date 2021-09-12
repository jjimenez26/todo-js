

export class Todo {
    //metodo estatico
    //static fromJson( Id, Tarea, Completado, Creado ){

      //  const tempTodo = new Todo(Tarea);

        // tempTodo.Id         = Id;
        // tempTodo.Completado = Completado;
        // tempTodo.Creado     = Creado;

        // return tempTodo;
    // }

    constructor( Tarea ){
        this.Tarea = Tarea;

        this.Id = new Date().getTime();// esto tomara la fecha unos numeros 123455 y los tomara de id
        this.Completado = false;
        this.Creado = Date();


    }

    //imprimirClase(){
      //  console.log(`${this.Tarea} - ${this.Id}`);

    //}



}