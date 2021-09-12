//siempre pon los stylos al inicio.
import './styles.css';
import {Todo, TodoList} from './classes/index'; // cuando se pone solo la carpeta classes toma el index dentro de la carpeta
import { CrearTodoHtml } from './js/componentes';

export const todolist = new TodoList();

todolist.Todos.forEach(todo => CrearTodoHtml(todo));




console.log('todos', todolist.Todos);

//const tarea =  new Todo('Aprender JavaScript!!!!!');
//todolist.NuevoTodo(tarea);

//console.log(todolist);

//CrearTodoHtml(tarea);

