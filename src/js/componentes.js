
import { todolist } from '..';
import { Todo } from '../classes/index';
import {TodoList} from '../classes/index';

//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchofiltros = document.querySelectorAll('.filtro');




export const CrearTodoHtml = ( Todo ) => {
const htmlTodo =`
             <li class="${(Todo.Completado) ? 'completed' : '' }"data-id="${Todo.Id}">
             <div class="view">
							<input class="tog" type="checkbox" ${(Todo.Completado) ? 'checked' : ''}>
							<label> ${ Todo.Tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;

const div = document.createElement('div');  // este div encierra todo el TodoHtml
 div.innerHTML = htmlTodo;

 divTodoList.append( div.firstElementChild );

 return div.firstElementChild;

}

//Eventos 
txtInput.addEventListener('keyup', (event) => {

	if(event.keyCode === 13 && txtInput.value.length > 0) {
		console.log(txtInput.value);

		const nuevoTodo = new Todo(txtInput.value);
		todolist.NuevoTodo(nuevoTodo);

		//console.log(todolist);

		CrearTodoHtml(nuevoTodo);
		txtInput.value = '';
	}


});
divTodoList.addEventListener('click', (event) => {
	
	
	const NombreElemento = event.target.localName;//input,label y button
	const todoElemento   = event.target.parentElement.parentElement;
	const todoId = todoElemento.getAttribute('data-id');

	
	

	if (NombreElemento.includes('input') ){ //cuando hacen click
		todolist.MarcarTodoCompletado( todoId );
		todoElemento.classList.toggle('completed');


	} else if(NombreElemento.includes('button') ){// hay que borrar todo
		todolist.EliminarTodo(todoId);
		//esta referencia lo borra del html de vista
		divTodoList.removeChild(todoElemento);

	}
	
});

btnBorrar.addEventListener('click', () => {
	todolist.EliminarCompletado();

	for(let i = divTodoList.children.length -1; i >= 0; i--){
		const elemento = divTodoList.children[i];
		
								//contains evalua el valor de la clase o class, toma class completed
		if(elemento.classList.contains('completed') ){
			divTodoList.removeChild(elemento);
		}

	}


});

ulFiltros.addEventListener('click', (event) => {

	const filtro = event.target.text;
	//esto es una validacion por si damos click a un espacio en blanco
	if(!filtro){ return; }

	anchofiltros.forEach(elem => elem.classList.remove('selected'));
	event.target.classList.add('selected');


	for(const elemento of divTodoList.children){

		elemento.classList.remove('hidden');
		const tareacompletada = elemento.classList.contains('completed');




		switch(filtro) {

			case 'Pendientes': 
				if(tareacompletada){
					elemento.classList.add('hidden');
				}
				break;
				case 'Completados': 
					if(!tareacompletada){
						elemento.classList.add('hidden');
					}
					break;
			
		}

	}

});
