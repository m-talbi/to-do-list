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

const hideTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskEditInput.classList.add('edit_active');
  taskEditInput.style.width = `${taskEl.offsetWidth}px`;
  taskEditInput.style.height = `${taskEl.offsetHeight}px`;

  taskCheckBox.setAttribute('disabled', true);
  taskEl.setAttribute('draggable', false);
};

const showTaskEl = (taskEl, taskEditInput, taskCheckBox) => {
  taskCheckBox.removeAttribute('disabled');
  taskEl.setAttribute('draggable', true);
  taskEditInput.classList.remove('edit_active');
};

export const showEditField = (taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList) => {
  hideTaskEl(taskEl, taskEditInput, taskCheckBox);
  placeCursorTextEnd(taskEditInput);

  taskEditInput.addEventListener('keypress', (ev) => {
    if (ev.key !== 'Enter') return;

    const editedText = taskEditInput.value;
    toDoList.find((task) => task.index === parseInt(taskEl.id, 10)).description = editedText;
    localStorage.setItem('todo', JSON.stringify(toDoList));

    taskDescription.textContent = editedText;
    showTaskEl(taskEl, taskEditInput, taskCheckBox);
  });

  document.addEventListener('click', (ev) => {
    if (ev.target.closest('li') === taskEl) return;
    taskEditInput.value = taskDescription.textContent;
    showTaskEl(taskEl, taskEditInput, taskCheckBox);
  });
};

export const toggleCheckBox = (taskEl, taskDescription, toDoList) => {
  toDoList.find((task) => {
    if (task.index !== parseInt(taskEl.id, 10)) return false;
    task.isCompleted = !task.isCompleted;
    return true;
  });

  localStorage.setItem('todo', JSON.stringify(toDoList));
  taskDescription.classList.toggle('line_through');
};

export const appendTaskEl = (task, tasksListEl) => {
  const taskEl = `
  <li id="${task.index}" class="task" draggable="true">
    <article>
      <div class="todo__task">
        <input class="task_checkbox" type="checkbox" ${task.isCompleted ? 'checked' : ''} />
        <p class="${task.isCompleted ? 'line_through' : ''}">${task.description}</p>
        <input class="${task.isCompleted ? 'line_through' : ''} task_description" value="${task.description}" />
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

export const removeTaskEl = (taskEl, taskListEl, toDoList, callback) => {
  const filteredTaskList = toDoList.filter((task) => task.index !== parseInt(taskEl.id, 10));

  toDoList = filteredTaskList.reduce((tasks, task, idx) => {
    const next = idx + 1;
    return [...tasks, { ...task, index: next }];
  }, []);

  localStorage.setItem('todo', JSON.stringify(toDoList));
  taskListEl.innerHTML = '';
  callback();
};