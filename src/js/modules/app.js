import {
  appendTaskEl,
  saveTaskLocalStorage,
  removeTaskEl,
  showEditField,
  toggleCheckBox,
} from './helpers.js';
import addDraggableListener from './dragEffect.js';

class TodoListApp {
  constructor(form, tasksContainerEl, clearListBtn) {
    this.todoList = JSON.parse(localStorage.getItem('todo')) || [];
    this.tasksContainerEl = tasksContainerEl;
    this.form = form;
    this.clearListBtn = clearListBtn;
  }

  initializeTodoList = () => {
    this.#displayTodoList();
    this.#handleFormSubmit();
    this.#handleClearListBtnClick();
  }

  #handleClearListBtnClick = () => {
    this.clearListBtn.addEventListener('click', () => {
      const filteredTaskList = this.todoList.filter((task) => !task.isCompleted);
      this.todoList = filteredTaskList.map((task, idx) => ({ ...task, index: idx + 1 }));

      localStorage.setItem('todo', JSON.stringify(this.todoList));
      this.tasksContainerEl.innerHTML = '';
      this.#displayTodoList();
    });
  };

  #handleTaskBtnsClick = (taskEl, tasksContainerEl, todoList) => {
    const taskCheckBox = taskEl.querySelector('.task_checkbox');
    const taskDeleteIcon = taskEl.querySelector('.delete-option-icon');
    const taskEditIcon = taskEl.querySelector('.edit-option-icon');
    const taskEditInput = taskEl.querySelector('.task_description');
    const taskDescription = taskEl.querySelector('p');

    taskCheckBox.addEventListener('change', () => {
      toggleCheckBox(taskEl, taskDescription, taskCheckBox, todoList);
    });

    taskDeleteIcon.addEventListener('click', () => {
      removeTaskEl(taskEl, tasksContainerEl, todoList);
    });

    taskEditIcon.addEventListener('click', () => {
      showEditField(taskEl, taskEditInput, taskCheckBox, taskDescription, todoList);
    });
  };

  #displayTodoList = () => {
    this.todoList.forEach((task) => {
      appendTaskEl(task, this.tasksContainerEl);
      const addedTask = this.tasksContainerEl.lastElementChild;
      this.#handleTaskBtnsClick(addedTask, this.tasksContainerEl, this.todoList);
      addDraggableListener(addedTask, this.todoList);
    });
  }

  #handleFormSubmit = () => {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      const task = {
        description: this.form.children[0].value.trim(),
        isCompleted: false,
        index: this.todoList.length + 1,
      };

      saveTaskLocalStorage(task, this.todoList);
      appendTaskEl(task, this.tasksContainerEl);

      const addedTask = this.tasksContainerEl.lastElementChild;

      this.#handleTaskBtnsClick(addedTask, this.tasksContainerEl, this.todoList);
      this.form.reset();
      addDraggableListener(addedTask, this.todoList);
    });
  };
}

export default TodoListApp;
