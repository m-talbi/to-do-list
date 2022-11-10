/**
 * @jest-environment jsdom
 */

import {
  appendTaskEl,
  saveTaskLocalStorage,
} from '../js/todo-helper-functions.js';
import {
  getAddedTask,
  handleTaskBtnsClick,
} from '../__mocks__/utils.js';

let mockTaskData = [
  {
    description: 'Feed the cats',
    isCompleted: false,
    index: 1,
  },
  {
    description: 'Do my homework',
    isCompleted: false,
    index: 2,
  },
];

describe('Update task description', () => {
  test('Update method should update both the dom and local storage', () => {
    document.body.innerHTML = `
     <main>
       <form action="">
         <input id="task-description" type="text" placeholder="Add to your list.." required />
       </form>
       <ul id="tasksList"></ul>
     </main>
    `;

    const toDoList = JSON.parse(localStorage.getItem('todo')) || [];
    const tasksListEl = document.getElementById('tasksList');

    appendTaskEl(mockTaskData[1], tasksListEl);
    saveTaskLocalStorage(mockTaskData[1], toDoList);

    handleTaskBtnsClick(tasksListEl.lastElementChild, toDoList, tasksListEl);

    const updatedDescription = 'Do my math homework';

    const taskEditIcon = tasksListEl.lastElementChild.querySelector('.edit-option-icon');
    const taskEditInput = tasksListEl.lastElementChild.querySelector('.task_description');

    // Open edit mode
    taskEditIcon.click();
    // update input field
    taskEditInput.value = updatedDescription;

    // trigger enter key press
    const keyEvent = new KeyboardEvent('keypress', { key: 'Enter', shiftKey: false });
    taskEditInput.dispatchEvent(keyEvent);

    const taskFromElement = getAddedTask(tasksListEl);
    const taskFromStorage = JSON.parse(localStorage.getItem('todo'))[0];

    expect(taskFromElement.description).toBe(updatedDescription);
    expect(taskFromStorage.description).toBe(updatedDescription);
    localStorage.removeItem('todo');
  });
});

describe('Update an item completed status', () => {
  test('Clicking on task checkbox should change task completed status', () => {
    document.body.innerHTML = `
      <main>
        <form action="">
          <input id="task-description" type="text" placeholder="Add to your list.." required />
        </form>
        <ul id="tasksList"></ul>
      </main>
    `;

    mockTaskData = [
      {
        description: 'Feed the cats',
        isCompleted: false,
        index: 1,
      },
      {
        description: 'Do my homework',
        isCompleted: false,
        index: 2,
      },
    ];
    const toDoList = JSON.parse(localStorage.getItem('todo')) || [];
    const tasksListEl = document.getElementById('tasksList');

    appendTaskEl(mockTaskData[0], tasksListEl);
    saveTaskLocalStorage(mockTaskData[0], toDoList);
    handleTaskBtnsClick(tasksListEl.firstElementChild, toDoList, tasksListEl);

    const taskCheckBox = tasksListEl.querySelector('.task_checkbox');
    taskCheckBox.click();

    const taskFromStorage = JSON.parse(localStorage.getItem('todo'))[0];
    const taskFromElement = getAddedTask(tasksListEl);

    expect(taskFromElement.isCompleted).toBeTruthy();
    expect(taskFromStorage.isCompleted).toBeTruthy();
    localStorage.removeItem('todo');
  });
});