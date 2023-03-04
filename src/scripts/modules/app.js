import { showEditField, toggleCheckBox } from './editTask.js';
import Draggable from './draggable.js';
import appendTaskEl from './addTask.js';
import { saveTaskLocalStorage, toggleClearButtonDisabledClass } from './utilities.js';
import removeTaskEl from './deleteTask.js';

class TodoListApp {
  constructor(form, tasksContainerEl, clearListBtn) {
    this.todoList = JSON.parse(localStorage.getItem('todo')) || [];
    this.draggable = new Draggable(this.todoList);
    this.tasksContainerEl = tasksContainerEl;
    this.form = form;
    this.clearListBtn = clearListBtn;
  }

  initialize = () => {
    this.#displayTodoList(this.tasksContainerEl, this.todoList, this.clearListBtn);
    this.#handleFormSubmit(this.todoList, this.tasksContainerEl, this.clearListBtn);
    this.#handleClearListBtnClick(this.todoList, this.tasksContainerEl, this.clearListBtn);
    toggleClearButtonDisabledClass(this.todoList, this.clearListBtn);
  }

  #handleClearListBtnClick = (todoList, tasksContainerEl, clearListBtn) => {
    clearListBtn.addEventListener('click', () => {
      const filteredTaskList = todoList.filter((task) => !task.isCompleted);
      todoList = filteredTaskList.map((task, idx) => ({ ...task, index: idx + 1 }));

      localStorage.setItem('todo', JSON.stringify(todoList));
      tasksContainerEl.replaceChildren();
      this.#displayTodoList(tasksContainerEl, todoList, clearListBtn);
      toggleClearButtonDisabledClass(todoList, clearListBtn);
    });
  };

  #handleTaskBtnsClick = (taskEl, tasksContainerEl, todoList, clearListBtn) => {
    const taskCheckBox = taskEl.querySelector('.task_checkbox');
    const taskDeleteIcon = taskEl.querySelector('.delete-option-icon');
    const taskEditIcon = taskEl.querySelector('.edit-option-icon');
    const taskEditInput = taskEl.querySelector('.task_description');
    const taskDescription = taskEl.querySelector('p');

    taskCheckBox.addEventListener('change', () => {
      toggleCheckBox(taskEl, taskDescription, taskCheckBox, todoList);
      toggleClearButtonDisabledClass(todoList, clearListBtn);
    });

    taskDeleteIcon.addEventListener('click', () => {
      removeTaskEl(taskEl, tasksContainerEl, todoList);
      toggleClearButtonDisabledClass(todoList, clearListBtn);
    });

    taskEditIcon.addEventListener('click', () => {
      showEditField(taskEl, taskEditInput, taskCheckBox, taskDescription, todoList);
    });
  };

  #displayTodoList = (tasksContainerEl, todoList, clearListBtn) => {
    todoList.forEach((task) => {
      appendTaskEl(task, tasksContainerEl);
      const addedTask = tasksContainerEl.lastElementChild;
      this.#handleTaskBtnsClick(addedTask, tasksContainerEl, todoList, clearListBtn);
      this.draggable.addDraggableListener(addedTask);
    });
  }

  #handleFormSubmit = (todoList, tasksContainerEl, clearListBtn) => {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      const task = {
        description: this.form.children[0].value.trim(),
        isCompleted: false,
        index: todoList.length + 1,
      };

      saveTaskLocalStorage(task, todoList);
      appendTaskEl(task, tasksContainerEl);

      const addedTask = tasksContainerEl.lastElementChild;

      this.#handleTaskBtnsClick(addedTask, tasksContainerEl, todoList, clearListBtn);
      this.form.reset();
      this.draggable.addDraggableListener(addedTask);
    });
  };
}

export default TodoListApp;
