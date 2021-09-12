
export class TodoList{
    constructor (){

        //this.Todos = [];
        this.CargarLocalStorage();

    }

    NuevoTodo( Todo ) {

        this.Todos.push( Todo );
        this.GuardarLocalStorage();

    }

    EliminarTodo( Id ) {
      this.Todos = this.Todos.filter(todo => todo.id =! Id);
      this.GuardarLocalStorage();

    }

    MarcarTodoCompletado( Id ){
        for( const todo of this.Todos){
            if(todo.Id == Id){
                
                todo.Completado = !todo.Completado;
                this.GuardarLocalStorage();
                break;

            }

        }

    }

    EliminarCompletado(){
        
        this.Todos = this.Todos.filter(todo => !todo.Completado);
        this.GuardarLocalStorage();

        
    }

    GuardarLocalStorage(){
                                        //JSON.stringify()convierte ese arreglo en un json perfecto
        localStorage.setItem('todo', JSON.stringify( this.Todos ));
    }
    CargarLocalStorage(){

       // if(localStorage.getItem('todo') ) {
          //>>> //para poder mostrarlo debemos ponerlo como era antes un Arreglo eso lo hace el json parse
         //   this.Todos = JSON.parse( localStorage.getItem('todo'));

            //console.log('localStorage: ',this.Todos);


       // }else{
         //   this.Todos =[];
         
         //vamos a hacer esa misma condicional con operedor ternario 
        this.Todos = (localStorage.getItem('todo')) 
                        ? JSON.parse( localStorage.getItem('todo')) 
                        : [];


        //this.Todos = this.Todos.map( obj => Todo.fromJson( obj) );
        }    

        
}