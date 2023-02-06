/**
 * @jest-environment jsdom
 */

import {
  appendTaskEl, editTask,
  saveTaskLocalStorage, toggleCheckBox,
} from '../js/modules/helpers.js';
import TodoListApp from '../js/modules/app.js';
import mockTaskData from '../__mocks__/data.js';
import getAddedTask from '../__mocks__/utility.js';

describe('Update task description', () => {
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
    localStorage.setItem('todo', '[]');
    tasksListEl.innerHTML = '';
  });

  test('Update method should update both the DOM and local storage', () => {
    appendTaskEl(mockTaskData[0], tasksListEl);
    saveTaskLocalStorage(mockTaskData[0], todoList);

    const updatedDescription = 'Do my math homework';
    const taskDescription = tasksListEl.lastElementChild.querySelector('p');

    editTask(todoList, mockTaskData[0].index, updatedDescription, taskDescription);

    const taskFromDOM = getAddedTask(tasksListEl);
    const taskFromStorage = JSON.parse(localStorage.getItem('todo'))[0];

    expect(taskFromDOM.description).toBe(updatedDescription);
    expect(taskFromStorage.description).toBe(updatedDescription);
  });

  test('Clicking on task checkbox should change task completed status', () => {
    appendTaskEl(mockTaskData[1], tasksListEl);
    saveTaskLocalStorage(mockTaskData[1], todoList);

    const taskCheckBox = tasksListEl.querySelector('.task_checkbox');
    const taskDescription = tasksListEl.lastElementChild.querySelector('p');

    taskCheckBox.click();
    toggleCheckBox(
      tasksListEl.lastElementChild,
      taskDescription,
      taskCheckBox,
      todoList,
    );

    const taskFromStorage = JSON.parse(localStorage.getItem('todo'))[0];
    const taskFromElement = getAddedTask(tasksListEl);

    expect(taskFromElement.isCompleted).toBeTruthy();
    expect(taskFromStorage.isCompleted).toBeTruthy();
  });

  test('Clear method should remove a completed task from dom and local storage', () => {
    mockTaskData.forEach((task) => {
      appendTaskEl(task, tasksListEl);
      saveTaskLocalStorage(task, todoList);
    });

    const tasksCheckBoxes = tasksListEl.querySelectorAll('.task_checkbox');

    tasksCheckBoxes.forEach((checkBox) => {
      checkBox.click();
    });

    clearListBtn.click();

    const taskFromStorage = JSON.parse(localStorage.getItem('todo'))[0];
    const taskFromElement = getAddedTask(tasksListEl);

    expect(taskFromElement).toBeNull();
    expect(taskFromStorage).toEqual(undefined);
  });
});
