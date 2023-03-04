import { hideTaskEl, placeCursorTextEnd, showTaskEl } from './utilities.js';

export const editTask = (toDoList, id, editedText, taskDescription) => {
  toDoList
    .find((task) => task.index === parseInt(id, 10))
    .description = editedText;

  taskDescription.textContent = editedText;
  localStorage.setItem('todo', JSON.stringify(toDoList));
};

export const showEditField = (taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList) => {
  hideTaskEl(taskEl, taskEditInput, taskCheckBox);
  placeCursorTextEnd(taskEditInput);

  taskEditInput.addEventListener('keypress', (ev) => {
    if (ev.key !== 'Enter') return;

    const id = taskEl.id.match(/t(\d+)/)[1];
    const editedText = taskEditInput.value;

    editTask(toDoList, id, editedText, taskDescription);
    showTaskEl(taskEl, taskEditInput, taskCheckBox);
  });

  document.addEventListener('click', (ev) => {
    if (ev.target.closest('li') === taskEl) return;
    taskEditInput.value = taskDescription.textContent;
    showTaskEl(taskEl, taskEditInput, taskCheckBox);
  });
};

export const toggleCheckBox = (taskEl, taskDescription, taskCheckBox, toDoList) => {
  const id = taskEl.id.match(/t(\d+)/)[1];
  toDoList
    .find((task) => task.index === parseInt(id, 10))
    .isCompleted = taskCheckBox.checked;

  localStorage.setItem('todo', JSON.stringify(toDoList));
  taskDescription.classList.toggle('line_through');
};
