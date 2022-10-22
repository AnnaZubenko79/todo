import { onDeleteTask } from './deleteTask.js';
import { onToggleTask } from './updateTask.js';

export const onClickTask = e => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  const isCheckBox = e.target.classList.contains('list-item__checkbox');
  const taskId = e.target.dataset.id;
  if (!isCheckBox && !isDeleteBtn) {
    return;
  }
  if (isDeleteBtn) {
    onDeleteTask(e);
  }
  if (isCheckBox) {
    onToggleTask(e);
  }
};
