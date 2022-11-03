import {
  showEditField,
  toggleCheckBox,
  appendTaskEl,
  removeTaskEl,
} from './todo-helper-functions.js';
import addDraggableListener from './dragEffect.js';

const tasksListEl = document.getElementById('tasksList');
const clearListBtn = document.getElementById('clear-list');
const form = document.querySelector('form');

let toDoList;

const handleClearListBtnClick = (displayToDoList) => {
  clearListBtn.addEventListener('click', () => {
    const filteredTaskList = toDoList.filter((task) => !task.isCompleted);
    toDoList = filteredTaskList.map((task, idx) => ({ ...task, index: idx + 1 }));

    localStorage.setItem('todo', JSON.stringify(toDoList));
    tasksListEl.innerHTML = '';
    displayToDoList();
  });
};

const handleTaskBtnsClick = (id, displayToDoList) => {
  const taskEl = document.getElementById(`${id}`);

  const taskCheckBox = taskEl.querySelector('.task_checkbox');
  const taskDeleteIcon = taskEl.querySelector('.delete-option-icon');
  const taskEditIcon = taskEl.querySelector('.edit-option-icon');
  const taskEditInput = taskEl.querySelector('.task_description');
  const taskDescription = taskEl.querySelector('p');

  taskCheckBox.addEventListener('change', () => {
    toggleCheckBox(taskEl, taskDescription, toDoList);
  });

  taskDeleteIcon.addEventListener('click', () => {
    removeTaskEl(taskEl, tasksListEl, toDoList, displayToDoList);
  });

  taskEditIcon.addEventListener('click', () => {
    showEditField(taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList);
  });
};

const displayToDoList = () => {
  toDoList = JSON.parse(localStorage.getItem('todo')) || [];
  toDoList.forEach((task) => {
    appendTaskEl(task, tasksListEl);
    handleTaskBtnsClick(task.index, displayToDoList);
    addDraggableListener(tasksListEl.lastElementChild, toDoList, displayToDoList);
  });
};

const handleFormSubmit = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskObj = {
      description: form['task-description'].value.trim(),
      isCompleted: false,
      index: toDoList.length === 0 ? 1 : toDoList.at(-1).index + 1,
    };

    toDoList.push(taskObj);
    localStorage.setItem('todo', JSON.stringify(toDoList));

    appendTaskEl(taskObj, tasksListEl);
    handleTaskBtnsClick(taskObj.index, displayToDoList);
    addDraggableListener(tasksListEl.lastElementChild, toDoList, displayToDoList);
    form.reset();
  });
};

displayToDoList();
handleFormSubmit();
handleClearListBtnClick(displayToDoList);