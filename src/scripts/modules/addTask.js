const appendTaskEl = (task, tasksListEl) => {
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

export default appendTaskEl;