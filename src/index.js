import '../src/style.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

const newtodo = new Todo('Aprende JavaScript');

console.log('todos', todoList.todos);