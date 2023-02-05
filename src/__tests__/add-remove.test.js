/**
 * @jest-environment jsdom
 */

import { appendTaskEl, removeTaskEl, saveTaskLocalStorage } from '../js/modules/helpers.js';
import TodoListApp from '../js/modules/app.js';
import mockTaskData from '../__mocks__/data.js';
import getAddedTask from '../__mocks__/utility.js';

describe('Add task element <li> to task list <ul>', () => {
  document.body.innerHTML = `
      <main>
        <form action="">
          <input id="task-description" type="text" placeholder="Add to your list.." required />
        </form>
        <ul id="tasksList"></ul>
      </main>
      <footer>
        <input id="clear-list" type="button" value="Clear all completed" />
      </footer>
    `;

  const tasksListEl = document.getElementById('tasksList');
  const form = document.querySelector('form');
  const clearListBtn = document.getElementById('clear-list');
  let todoList = [];
  const app = new TodoListApp(form, tasksListEl, clearListBtn);
  app.initializeTodoList();

  beforeEach(() => {
    todoList = [];
    tasksListEl.innerHTML = '';
  });

  test('Append function should add a new task item', () => {
    appendTaskEl(mockTaskData[0], tasksListEl);
    const task = getAddedTask(tasksListEl);
    expect(task).toEqual(mockTaskData[0]);
  });

  test('saveTaskLocalStorage function should add new a task item in local storage', () => {
    saveTaskLocalStorage(mockTaskData[1], todoList);
    const task = JSON.parse(localStorage.getItem('todo'))[0];
    expect(task).toEqual(mockTaskData[1]);
  });

  test('remove function should remove a task item from the DOM', () => {
    appendTaskEl(mockTaskData[0], tasksListEl);
    saveTaskLocalStorage(mockTaskData[0], todoList);
    const taskEl = tasksListEl.lastElementChild;
    removeTaskEl(taskEl, tasksListEl, todoList);
    expect(tasksListEl.lastElementChild).toBeNull();
  });

  test('remove function should remove a task item from local storage', () => {
    appendTaskEl(mockTaskData[1], tasksListEl);
    saveTaskLocalStorage(mockTaskData[1], todoList);

    const taskEl = tasksListEl.lastElementChild;
    removeTaskEl(taskEl, tasksListEl, todoList);

    const task = JSON.parse(localStorage.getItem('todo'))[0];
    expect(task).toEqual(undefined);
  });
});
