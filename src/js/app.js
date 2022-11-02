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
      <i class="fa-solid fa-ellipsis-vertical draggable options-icon"></i>
    </article>
  </li>
  `;
  tasksListEl.insertAdjacentHTML('beforeend', taskEl);
};

const handleTaskCheckBoxClick = (id) => {
  const taskEl = document.getElementById(`${id}`);

  const taskCheckBox = taskEl.querySelector('input');
  const taskDescription = taskEl.querySelector('p');

  taskCheckBox.addEventListener('change', () => {
    if (taskCheckBox.checked) {
      toDoList.find((task) => task.id === parseInt(taskEl.id, 10)).isCompleted = true;
      localStorage.setItem('todo', JSON.stringify(toDoList));
      taskDescription.classList.add('line_through');
    } else {
      toDoList.find((task) => task.id === parseInt(taskEl.id, 10)).isCompleted = false;
      localStorage.setItem('todo', JSON.stringify(toDoList));
      taskDescription.classList.remove('line_through');
    }
  });
};

const displayToDoList = () => {
  toDoList.forEach((task) => {
    appendTaskEl(task);
    handleTaskCheckBoxClick(task.id);
  });
};

const handleClearBtnClick = () => {
  clearListBtn.addEventListener('click', () => {
    const allTaskEl = tasksListEl.querySelectorAll('.task');

    allTaskEl.forEach((taskEl) => {
      const taskCheckBox = taskEl.querySelector('input');
      if (!taskCheckBox.checked) return;

      toDoList = toDoList.filter((task) => task.id !== parseInt(taskEl.id, 10));
      localStorage.setItem('todo', JSON.stringify(toDoList));
      taskEl.remove();
    });
  });
};

const handleFormSubmit = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
      description: form['task-description'].value,
      isCompleted: false,
      id: toDoList.length === 0 ? 1 : toDoList.at(-1).id + 1,
    };

    toDoList.push(task);
    localStorage.setItem('todo', JSON.stringify(toDoList));

    appendTaskEl(task);
    handleTaskCheckBoxClick(task.id);
    addDraggableListener(tasksListEl.lastElementChild);
    form.reset();
  });
};

handleFormSubmit();
displayToDoList();
handleClearBtnClick();
addDraggablesListener(toDoList);