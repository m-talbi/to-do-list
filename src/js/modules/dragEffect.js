let dragStartTaskEl;
let todoListItems;

const swapTaskEl = (dragStartTaskEl, dragEndTaskEl) => {
  const listContainer = document.querySelectorAll('.task');
  const taskListEl = document.getElementById('tasksList');
  let taskOneIndex;
  let taskTwoIndex;

  listContainer.forEach((task, index) => {
    if (task === dragStartTaskEl) {
      taskOneIndex = index;
    }
    if (task === dragEndTaskEl) {
      taskTwoIndex = index;
    }
  });

  if (taskOneIndex > taskTwoIndex) {
    listContainer.item(taskTwoIndex).insertAdjacentElement('beforebegin', dragStartTaskEl);
    listContainer.item(taskOneIndex).insertAdjacentElement('afterend', dragEndTaskEl);
  } else {
    listContainer.item(taskTwoIndex).insertAdjacentElement('afterend', dragStartTaskEl);
    listContainer.item(taskOneIndex).insertAdjacentElement('beforebegin', dragEndTaskEl);
  }

  const tmpItem = todoListItems.splice(taskOneIndex, 1)[0];
  todoListItems.splice(taskTwoIndex, 0, tmpItem);

  todoListItems = todoListItems.map((task, idx) => ({ ...task, index: idx + 1 }));

  localStorage.setItem('todo', JSON.stringify(todoListItems));
  taskListEl.innerHTML = '';
  // display to list
};

const dragStart = (ev) => {
  dragStartTaskEl = ev.target.closest('li');
};

const dragOver = (ev) => {
  ev.preventDefault();
};

const drop = (ev) => {
  const dragEndTaskEl = ev.target.closest('li');
  swapTaskEl(dragStartTaskEl, dragEndTaskEl);
  ev.target.closest('article').classList.remove('drag_over');
};

const dragEnter = (ev) => {
  ev.target.closest('article').classList.add('drag_over');
};

const dragLeave = (ev) => {
  ev.target.closest('article').classList.remove('drag_over');
};

const addDraggableListener = (draggableItem, listItems) => {
  draggableItem.addEventListener('dragstart', dragStart);
  draggableItem.addEventListener('dragover', dragOver);
  draggableItem.addEventListener('drop', (ev) => {
    drop(ev);
  });
  draggableItem.addEventListener('dragenter', dragEnter);
  draggableItem.addEventListener('dragleave', dragLeave);

  todoListItems = listItems;
};

export default addDraggableListener;