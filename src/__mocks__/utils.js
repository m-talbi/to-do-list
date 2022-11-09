import { appendTaskEl } from '../js/todo-helper-functions.js';

export const getAddedTask = (container) => {
  const addedTask = container.lastElementChild;

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