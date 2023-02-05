import TodoListApp from './modules/app.js';

const tasksListEl = document.getElementById('tasksList');
const clearListBtn = document.getElementById('clear-list');
const form = document.querySelector('form');

const app = new TodoListApp(form, tasksListEl, clearListBtn);
app.initializeTodoList();