import { reOrderTasks } from './utilities.js';

const removeTaskEl = (taskEl, tasksContainerEl, todoList) => {
  const id = taskEl.id.match(/t(\d+)/)[1];
  const item = todoList.find((task) => task.index === parseInt(id, 10));
  tasksContainerEl.querySelector(`#t${item.index}`).remove();
  todoList.splice(id - 1, 1);
  reOrderTasks(tasksContainerEl, todoList);
};

export default removeTaskEl;