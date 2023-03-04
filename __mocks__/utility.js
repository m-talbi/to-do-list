const getAddedTask = (container) => {
  const addedTask = container.lastElementChild;
  if (!addedTask) return null;

  const taskCheckBox = addedTask.querySelector('.task_checkbox');
  const taskDescription = addedTask.querySelector('p');

  return {
    index: parseInt(addedTask.id.match(/t(\d+)/)[1], 10),
    isCompleted: taskCheckBox.checked,
    description: taskDescription.textContent,
  };
};

export default getAddedTask;
