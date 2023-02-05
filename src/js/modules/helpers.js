const placeCursorTextEnd = (inputEl) => {
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

export const appendTaskEl = (task, tasksListEl) => {
  const taskEl = `
  <li id="t${task.index}" class="task" draggable="true">
    <article>
    <div class="todo__task">
      <input class="task_checkbox" type="checkbox" ${task.isCompleted ? 'checked' : ''} />
      <p class="${task.isCompleted ? 'line_through' : ''}">${task.description}</p>
      <input class="task_description" value="${task.description}" />
    </div>
      <div class="task_options">
        <i class="fa-solid fa-pen-to-square edit-option-icon"></i>
        <i class="fa-solid fa-trash-can delete-option-icon"></i>
      </div>
    </article>
  </li>
  `;
  tasksListEl.insertAdjacentHTML('beforeend', taskEl);
};

export const saveTaskLocalStorage = (taskObj, toDoList) => {
  toDoList.push(taskObj);
  localStorage.setItem('todo', JSON.stringify(toDoList));
};

export const removeTaskEl = (taskEl, tasksContainerEl, todoList) => {
  const id = taskEl.id.match(/t(\d+)/)[1];
  const item = todoList.find((task) => task.index === parseInt(id, 10));
  tasksContainerEl.querySelector(`#t${item.index}`).remove();
  todoList.splice(item, 1);

  const { children } = tasksContainerEl;
  for (let idx = 0; idx < children.length; idx += 1) {
    children.item(idx).id = `t${idx + 1}`;
    todoList[idx].index = idx + 1;
  }
  localStorage.setItem('todo', JSON.stringify(todoList));
};

const hideTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskEditInput.classList.add('edit_active');
  taskEditInput.style.width = `${taskEl.offsetWidth}px`;
  taskEditInput.style.height = `${taskEl.offsetHeight + 1}px`;

  taskCheckBox.setAttribute('disabled', true);
  taskEl.setAttribute('draggable', false);
};

const showTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskCheckBox.removeAttribute('disabled');
  taskEl.setAttribute('draggable', true);
  taskEditInput.classList.remove('edit_active');
};

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
