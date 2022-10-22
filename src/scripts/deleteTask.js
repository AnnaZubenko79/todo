import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { getTasksList, updateTasksList, deleteTask } from './taskGateWay.js';

export const onDeleteTask = e => {
  const siblingsInputId = e.target.parentNode.firstElementChild.dataset.id;
  deleteTask(siblingsInputId)
    .then(() => getTasksList())
    .then(newTaskList => {
      setItem('tasksList', newTaskList);
      renderTasks();
    });
};
