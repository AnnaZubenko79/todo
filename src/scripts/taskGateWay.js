const baseUrl = 'https://62e3f5a5c6b56b45117f936b.mockapi.io/api/v1/tasks';
export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};

export const createTasksList = taskList => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskList),
  });
};

export const updateTasksList = (taskId, taskList) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskList),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
