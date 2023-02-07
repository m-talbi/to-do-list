import { reOrderTasks } from './helpers.js';

let dragStartTaskEl;
let todoListItems;

const swapTaskEl = (dragStartTaskEl, dragEndTaskEl) => {
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

  const tmpItem = todoListItems.splice(taskOneIndex, 1)[0];
  todoListItems.splice(taskTwoIndex, 0, tmpItem);
  reOrderTasks(taskListEl, todoListItems);
};

const dragOver = (ev) => ev.preventDefault();
const dragEnter = (ev) => ev.target.closest('article').classList.add('drag_over');
const dragLeave = (ev) => ev.target.closest('article').classList.remove('drag_over');
const drop = (ev) => {
  const dragEndTaskEl = ev.target.closest('li');
  swapTaskEl(dragStartTaskEl, dragEndTaskEl);
  ev.target.closest('article').classList.remove('drag_over');
};
const dragStart = (ev) => {
  dragStartTaskEl = ev.target.closest('li');
};

const addDraggableListener = (draggableItem, listItems) => {
  draggableItem.addEventListener('dragstart', dragStart);
  draggableItem.addEventListener('dragover', dragOver);
  draggableItem.addEventListener('drop', drop);
  draggableItem.addEventListener('dragenter', dragEnter);
  draggableItem.addEventListener('dragleave', dragLeave);

  todoListItems = listItems;
};

export default addDraggableListener;