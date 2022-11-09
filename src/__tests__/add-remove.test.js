/**
 * @jest-environment jsdom
 */

import { appendTaskEl, saveTaskLocalStorage } from '../js/todo-helper-functions.js';
import { getAddedTask, removeTaskEl } from '../__mocks__/utils.js';

const toDoList = JSON.parse(localStorage.getItem('todo')) || [];

const mockTaskData = [
  {
    description: 'Feed the cats',
    isCompleted: false,
    index: toDoList.length + 1,
  },
  {
    description: 'Feed the cats',
    isCompleted: false,
    index: toDoList.length + 1,
  },
];

describe('Add task element <li> to task list <ul>', () => {
  test('Append function should add a new task item', () => {
    document.body.innerHTML = `
    <main>
      <form action="">
        <input id="task-description" type="text" placeholder="Add to your list.." required />
      </form>
      <ul id="tasksList"></ul>
    </main>
    `;

    const tasksListEl = document.getElementById('tasksList');

    appendTaskEl(mockTaskData[0], tasksListEl);
    const { description, index, isCompleted } = getAddedTask(tasksListEl);

    expect(description).toBe(mockTaskData[0].description);
    expect(index).toBe(mockTaskData[0].index.toString());
    expect(isCompleted).toBe(mockTaskData[0].isCompleted);
  });
  test('saveTaskLocalStorage function should add new a task item in local storage', () => {
    saveTaskLocalStorage(mockTaskData[1], toDoList);
    const { description, index, isCompleted } = JSON.parse(localStorage.getItem('todo'))[0];

    expect(description).toBe(mockTaskData[1].description);
    expect(index).toBe(mockTaskData[1].index);
    expect(isCompleted).toBe(mockTaskData[1].isCompleted);
  });
});

describe('Remove task element <li> from task list <ul>', () => {
  test('remove function should remove a task item from task list <ul>', () => {
    document.body.innerHTML = `
    <main>
      <form action="">
        <input id="task-description" type="text" placeholder="Add to your list.." required />
      </form>
      <ul id="tasksList"></ul>
    </main>
    `;

    const tasksListEl = document.getElementById('tasksList');

    appendTaskEl(mockTaskData[0], tasksListEl);
    const taskEl = tasksListEl.lastElementChild;
    removeTaskEl(taskEl, toDoList, tasksListEl);
    expect(tasksListEl.lastElementChild).toBeNull();
  });
  test('remove function should remove a task item from local storage', () => {
    document.body.innerHTML = `
    <main>
      <form action="">
        <input id="task-description" type="text" placeholder="Add to your list.." required />
      </form>
      <ul id="tasksList"></ul>
    </main>
    `;

    const tasksListEl = document.getElementById('tasksList');

    appendTaskEl(mockTaskData[1], tasksListEl);
    saveTaskLocalStorage(mockTaskData[1], toDoList);

    const taskEl = tasksListEl.lastElementChild;
    removeTaskEl(taskEl, toDoList, tasksListEl);

    const taskObj = JSON.parse(localStorage.getItem('todo'))[0];

    expect(taskObj?.description).toBeUndefined();
    expect(taskObj?.index).toBeUndefined();
    expect(taskObj?.isCompleted).toBeUndefined();
  });
});
