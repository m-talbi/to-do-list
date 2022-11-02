let dragStartEl;

const swapTaskEl = (dragStartEl, endEl) => {
  const listContainer = document.querySelectorAll('ul li');
  let task1;
  let task2;

  listContainer.forEach((task, index) => {
    if (task === dragStartEl) {
      task1 = index;
    }
    if (task === endEl) {
      task2 = index;
    }
  });

  if (task1 > task2) {
    listContainer.item(task2).insertAdjacentElement('afterend', dragStartEl);
    listContainer.item(task1).insertAdjacentElement('afterend', endEl);
  } else {
    listContainer.item(task1).insertAdjacentElement('afterend', endEl);
    listContainer.item(task2).insertAdjacentElement('afterend', dragStartEl);
  }

  endEl.classList.remove('drag_over');
  dragStartEl.classList.remove('drag_over');
};

const dragStart = (ev) => {
  dragStartEl = ev.target.closest('li');
};

const dragOver = (ev) => {
  ev.preventDefault();
};

const drop = (ev) => {
  const dragEndEl = ev.target.closest('li');
  swapTaskEl(dragStartEl, dragEndEl);
  ev.target.closest('article').classList.remove('drag_over');
};

const dragEnter = (ev) => {
  const enteredEl = ev.target.closest('article');
  enteredEl.classList.add('drag_over');
};

const dragLeave = (ev) => {
  ev.target.closest('article').classList.remove('drag_over');
};

const addDraggablesListener = () => {
  const draggables = document.querySelectorAll('.task');
  const draggableList = document.querySelectorAll('ul li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  draggableList.forEach((draggable) => {
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', drop);
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
  });
};

export default addDraggablesListener;