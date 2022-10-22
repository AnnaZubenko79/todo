import { getItem } from './storage.js';

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};

const deleteTask = () => {
  const deleteElem = document.createElement('button');
  deleteElem.classList.add('list-item__delete-btn');
  return deleteElem;
};

const createListItem = ({ id, text, done }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  const checkboxElem = createCheckbox({ done, id });
  const deleteElem = deleteTask();
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  listItemElem.append(checkboxElem, textElem, deleteElem);
  return listItemElem;
};

const compareTasks = (a, b) => a.done - b.done;
export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
