import { addDraggablesListener, addDraggableListener } from './dragEffect.js';

const tasksListEl = document.getElementById('tasksList');
const clearListBtn = document.getElementById('clear-list');
const form = document.querySelector('form');

let toDoList = JSON.parse(localStorage.getItem('todo')) || [];

const appendTaskEl = (task) => {
  const taskEl = `
  <li id="${task.id}" class="task" draggable="true">
    <article>
      <div class="todo__task">
        <input type="checkbox" ${task.isCompleted ? 'checked' : ''} />
        <p class="${task.isCompleted ? 'line_through' : ''}">${task.description}</p>
      </div>
      <div class="task_options">
        <i class="fa-solid fa-trash-can delete-option-icon"></i>
        <i class="fa-solid fa-ellipsis-vertical drag-options-icon"></i>
      </div>
    </article>
  </li>
  `;
  tasksListEl.insertAdjacentHTML('beforeend', taskEl);
};

const removeTaskEl = (taskEl) => {
  toDoList = toDoList.filter((task) => task.id !== taskEl.id);
  localStorage.setItem('todo', JSON.stringify(toDoList));
  taskEl.remove();
};

const handleTaskBtnsClick = (id) => {
  const taskEl = tasksListEl.getElementById(`${id}`);

  const taskCheckBox = taskEl.querySelector('input');
  const taskDeleteIcon = taskEl.querySelector('.delete-option-icon');
  const taskDescription = taskEl.querySelector('p');

  taskCheckBox.addEventListener('change', () => {
    if (taskCheckBox.checked) {
      toDoList.find((task) => task.id === taskEl.id).isCompleted = true;
    } else {
      toDoList.find((task) => task.id === taskEl.id).isCompleted = false;
    }

    localStorage.setItem('todo', JSON.stringify(toDoList));
    taskDescription.classList.toggle('line_through');
  });

  taskDeleteIcon.addEventListener('click', () => {
    removeTaskEl(taskEl);
  });
};

const displayToDoList = () => {
  toDoList.forEach((task) => {
    appendTaskEl(task);
    handleTaskBtnsClick(task.id);
  });
};

const handleClearBtnClick = () => {
  clearListBtn.addEventListener('click', () => {
    const allTaskEl = tasksListEl.querySelectorAll('.task');

    allTaskEl.forEach((taskEl) => {
      const taskCheckBox = taskEl.querySelector('input');
      if (!taskCheckBox.checked) return;

      removeTaskEl(taskEl);
    });
  });
};

const handleFormSubmit = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
      description: form['task-description'].value,
      isCompleted: false,
      id: Math.random().toString(32).replace(/0\./, ''),
    };

    toDoList.push(task);
    localStorage.setItem('todo', JSON.stringify(toDoList));

    appendTaskEl(task);
    handleTaskBtnsClick(task.id);
    addDraggableListener(tasksListEl.lastElementChild, toDoList);
    form.reset();
  });
};

handleFormSubmit();
displayToDoList();
handleClearBtnClick();
addDraggablesListener(toDoList);