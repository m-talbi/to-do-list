import { reOrderTasks } from './utilities.js';

class Draggable {
  constructor(todoList) {
    this.dragStartTaskEl = null;
    this.todoListItems = todoList;
  }

  addDraggableListener = (draggableItem) => {
    draggableItem.addEventListener('dragstart', this.#dragStart);
    draggableItem.addEventListener('dragover', this.#dragOver);
    draggableItem.addEventListener('drop', this.#drop);
    draggableItem.addEventListener('dragenter', this.#dragEnter);
    draggableItem.addEventListener('dragleave', this.#dragLeave);
  };

  #swapTaskEl = (dragStartTaskEl, dragEndTaskEl) => {
    const listContainer = document.querySelectorAll('.task');
    const taskListEl = document.getElementById('tasksList');
    let taskOneIndex;
    let taskTwoIndex;

    for (let i = 0; i < listContainer.length; i += 1) {
      if (taskOneIndex !== undefined && taskTwoIndex !== undefined) break;
      else if (listContainer[i] === dragStartTaskEl) taskOneIndex = i;
      else if (listContainer[i] === dragEndTaskEl) taskTwoIndex = i;
    }

    if (taskOneIndex > taskTwoIndex) {
      listContainer.item(taskTwoIndex).insertAdjacentElement('beforebegin', dragStartTaskEl);
      listContainer.item(taskOneIndex).insertAdjacentElement('afterend', dragEndTaskEl);
    } else {
      listContainer.item(taskTwoIndex).insertAdjacentElement('afterend', dragStartTaskEl);
      listContainer.item(taskOneIndex).insertAdjacentElement('beforebegin', dragEndTaskEl);
    }

    const tmpItem = this.todoListItems.splice(taskOneIndex, 1)[0];
    this.todoListItems.splice(taskTwoIndex, 0, tmpItem);
    reOrderTasks(taskListEl, this.todoListItems);
  }

  #dragOver = (ev) => ev.preventDefault();

  #dragEnter = (ev) => ev.target.closest('article').classList.add('drag_over');

  #dragLeave = (ev) => ev.target.closest('article').classList.remove('drag_over');

  #drop = (ev) => {
    const dragEndTaskEl = ev.target.closest('li');
    this.#swapTaskEl(this.dragStartTaskEl, dragEndTaskEl);
    ev.target.closest('article').classList.remove('drag_over');
  };

  #dragStart = (ev) => {
    this.dragStartTaskEl = ev.target.closest('li');
  };
}

export default Draggable;