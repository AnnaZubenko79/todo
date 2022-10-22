import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTasksList } from './taskGateWay.js';

export const onToggleTask = e => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');

  const { text } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;
  const updateTask = {
    text,
    done,
  };

  updateTasksList(taskId, updateTask)
    .then(() => getTasksList())
    .then(newTaskList => {
      setItem('tasksList', newTaskList);
      renderTasks();
    });
};
