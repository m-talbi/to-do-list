export const reOrderTasks = (tasksContainerEl, todoList) => {
  const { children } = tasksContainerEl;
  for (let idx = 0; idx < children.length; idx += 1) {
    children.item(idx).id = `t${idx + 1}`;
    todoList[idx].index = idx + 1;
  }
  localStorage.setItem('todo', JSON.stringify(todoList));
};

export const saveTaskLocalStorage = (taskObj, toDoList) => {
  toDoList.push(taskObj);
  localStorage.setItem('todo', JSON.stringify(toDoList));
};

export const placeCursorTextEnd = (inputEl) => {
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

export const hideTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskEditInput.classList.add('edit_active');
  taskEditInput.style.width = `${taskEl.offsetWidth}px`;
  taskEditInput.style.height = `${taskEl.offsetHeight + 1}px`;

  taskCheckBox.setAttribute('disabled', true);
  taskEl.setAttribute('draggable', false);
};

export const showTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskCheckBox.removeAttribute('disabled');
  taskEl.setAttribute('draggable', true);
  taskEditInput.classList.remove('edit_active');
};

export const toggleClearButtonDisabledClass = (todoList, clearListBtn) => {
  const completed = todoList.findIndex((task) => task.isCompleted);

  if (completed >= 0 && clearListBtn.classList.contains('disabled')) {
    clearListBtn.classList.remove('disabled');
  } else if (completed < 0) {
    clearListBtn.classList.add('disabled');
  }
};