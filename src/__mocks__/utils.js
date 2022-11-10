import { appendTaskEl, toggleCheckBox } from '../js/todo-helper-functions.js';

export const getAddedTask = (container) => {
  const addedTask = container.lastElementChild;
  if (!addedTask) return null;

  const taskCheckBox = addedTask.querySelector('.task_checkbox');
  const taskDescription = addedTask.querySelector('p');

  return {
    index: addedTask.id,
    isCompleted: taskCheckBox.checked,
    description: taskDescription.textContent,
  };
};

// same remove function without refreshing todo list items
export const removeTaskEl = (taskEl, toDoList, tasksListEl) => {
  const filteredTaskList = toDoList.filter((task) => task.index !== parseInt(taskEl.id, 10));
  toDoList = filteredTaskList.map((task, idx) => ({ ...task, index: idx + 1 }));
  localStorage.setItem('todo', JSON.stringify(toDoList));
  tasksListEl.innerHTML = '';

  toDoList = JSON.parse(localStorage.getItem('todo')) || [];
  toDoList.forEach((task) => {
    appendTaskEl(task, tasksListEl);
  });
};

const placeCursorTextEnd = (inputEl) => {
  const taskDescLength = inputEl.value.length;

  if (inputEl.setSelectionRange) {
    inputEl.focus();
    inputEl.setSelectionRange(taskDescLength, taskDescLength);
  } else if (inputEl.createTextRange) {
    const textRange = inputEl.createTextRange();
    textRange.collapse(true);
    textRange.moveEnd('character', taskDescLength);
    textRange.moveStart('character', taskDescLength);
    textRange.select();
  }
};

const hideTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskEditInput.classList.add('edit_active');
  taskEditInput.style.width = `${taskEl.offsetWidth}px`;
  taskEditInput.style.height = `${taskEl.offsetHeight + 1}px`;

  taskCheckBox.setAttribute('disabled', true);
  taskEl.setAttribute('draggable', false);
};

const showTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskCheckBox.removeAttribute('disabled');
  taskEl.setAttribute('draggable', true);
  taskEditInput.classList.remove('edit_active');
};

export const showEditField = (taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList) => {
  hideTaskEl(taskEl, taskEditInput, taskCheckBox);
  placeCursorTextEnd(taskEditInput);

  taskEditInput.addEventListener('keypress', (ev) => {
    if (ev.key !== 'Enter') return;

    const editedText = taskEditInput.value;

    toDoList
      .find((task) => task.index === parseInt(taskEl.id, 10))
      .description = editedText;

    localStorage.setItem('todo', JSON.stringify(toDoList));

    taskDescription.textContent = editedText;
    showTaskEl(taskEl, taskEditInput, taskCheckBox);
  });
};

// same handleTaskBtnsClick function without displayToDoList dependency
export const handleTaskBtnsClick = (taskEl, toDoList, tasksListEl) => {
  const taskCheckBox = taskEl.querySelector('.task_checkbox');
  const taskDeleteIcon = taskEl.querySelector('.delete-option-icon');
  const taskEditIcon = taskEl.querySelector('.edit-option-icon');
  const taskEditInput = taskEl.querySelector('.task_description');
  const taskDescription = taskEl.querySelector('p');

  taskCheckBox.addEventListener('change', () => {
    toggleCheckBox(taskEl, taskDescription, taskCheckBox, toDoList);
  });

  taskDeleteIcon.addEventListener('click', () => {
    removeTaskEl(taskEl, tasksListEl, toDoList);
  });

  taskEditIcon.addEventListener('click', () => {
    showEditField(taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList);
  });
};

export const handleClearListBtnClick = (toDoList, tasksListEl, clearListBtn) => {
  clearListBtn.addEventListener('click', () => {
    const filteredTaskList = toDoList.filter((task) => !task.isCompleted);
    toDoList = filteredTaskList.map((task, idx) => ({ ...task, index: idx + 1 }));

    localStorage.setItem('todo', JSON.stringify(toDoList));
    tasksListEl.innerHTML = '';
    toDoList.forEach((task) => {
      appendTaskEl(task, tasksListEl);
    });
  });
};