const tasksListEl = document.getElementById('tasksList');
const clearListBtn = document.getElementById('clear-list');
const form = document.querySelector('form');

let toDoList = JSON.parse(localStorage.getItem('todo')) || [];

toDoList = [
  {
    description: 'Do my math homework',
    isCompleted: false,
    id: 9877,
  },
  {
    description: 'Take out the trash',
    isCompleted: false,
    id: 9878,
  },
  {
    description: 'Feed my cats',
    isCompleted: false,
    id: 9999,
  },
];

const appendTaskEl = (task) => {
  const content = `
  <li class="task" draggable="true">
    <article id="${task.id}">
      <div class="todo__task">
        <input type="checkbox" ${task.isCompleted ? 'checked' : ''} />
        <p>${task.description}</p>
      </div>
      <i class="fa-solid fa-ellipsis-vertical draggable options-icon"></i>
    </article>
  </li>
  `;
  tasksListEl.insertAdjacentHTML('beforeend', content);
};

const handleTaskInputsClick = (id) => {
  const taskEl = document.getElementById(`${id}`);

  const taskCheckBox = taskEl.querySelector('input');
  const taskdescription = taskEl.querySelector('p');

  taskCheckBox.addEventListener('click', () => {
    if (taskCheckBox.checked) {
      taskdescription.style.textDecorationLine = 'line-through';
    } else {
      taskdescription.style.textDecorationLine = 'none';
    }
  });
};

const displayToDoList = () => {
  toDoList.forEach((task) => {
    appendTaskEl(task);
    handleTaskInputsClick(task.id);
  });
};

const handleClearBtnClick = () => {
  clearListBtn.addEventListener('click', () => {
    const allTaskEl = tasksListEl.querySelectorAll('article');

    allTaskEl.forEach((taskEl) => {
      const taskCheckBox = taskEl.querySelector('input');
      if (!taskCheckBox.checked) return;

      toDoList = toDoList.filter((task) => task.id !== parseInt(taskEl.id, 10));
      localStorage.setItem('todo', JSON.stringify(toDoList));
      taskEl.parentElement.remove();
    });
  });
};

const handleFormSubmit = (form) => {
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
    handleTaskInputsClick(task.id);
    form.reset();
  });
};

handleFormSubmit(form);
displayToDoList();
handleClearBtnClick();