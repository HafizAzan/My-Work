import { END_POINTS_URL } from "./service.endpoint";
import MainApiService from "./MainApiService";

const getTodosData = () => {
  return MainApiService.get(END_POINTS_URL.TODOS);
};

const getTodosDatabyId = (id) => {
  return MainApiService.get(`${END_POINTS_URL.TODOS}/${id}`);
};

const storeTodoData = (data = {}) => {
  return MainApiService.post(END_POINTS_URL.TODOS, data);
};

const updateTodoData = async (id, payload = {}) => {
  return MainApiService.patch(`${END_POINTS_URL.TODOS}/${id}`, payload);
};

const deleteTodos = (id) => {
  return MainApiService.delete(`${END_POINTS_URL.TODOS}/${id}`);
};

const deleteAllTodos = () => {
  return MainApiService.delete(END_POINTS_URL.TODOS);
};

export {
  getTodosData,
  storeTodoData,
  deleteTodos,
  deleteAllTodos,
  getTodosDatabyId,
  updateTodoData,
};
