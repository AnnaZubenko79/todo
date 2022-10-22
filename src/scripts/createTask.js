import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { getTasksList, createTasksList } from './taskGateWay.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';
  const newTasksList = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTasksList(newTasksList)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
