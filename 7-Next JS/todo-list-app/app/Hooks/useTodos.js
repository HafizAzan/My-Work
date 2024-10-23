import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteAllTodos,
  deleteTodos,
  getTodosData,
  getTodosDatabyId,
  storeTodoData,
  updateTodoData,
} from "app/utils/Todo.Service";
import React from "react";

const useTodos = () => {
  const {
    data: TodoData,
    refetch: refetchTodoData,
    isLoading: loaderTodo,
  } = useQuery({
    queryKey: ["TodosGet"],
    queryFn: () => getTodosData(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const { mutateAsync: TodoDataById, data: showDataById } = useMutation({
    mutationKey: ["TodosGetById"],
    mutationFn: (id) => getTodosDatabyId(id),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const { mutateAsync: saveTodoData } = useMutation({
    mutationKey: ["SaveTodo"],
    mutationFn: (newTodo) => storeTodoData(newTodo),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  const { mutateAsync: editTodoData } = useMutation({
    mutationKey: ["EditTodo"],
    mutationFn: (id, payload) => updateTodoData(id, payload),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  const { mutateAsync: deleteTodoData, isPending: deleteTodosLoader } =
    useMutation({
      mutationKey: ["DeleteTodo"],
      mutationFn: (id) => deleteTodos(id),
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    });

  const { mutateAsync: deleteAllTodoData } = useMutation({
    mutationKey: ["DeleteAllTodo"],
    mutationFn: () => deleteAllTodos(),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  return {
    TodoData,
    refetchTodoData,
    saveTodoData,
    deleteTodoData,
    deleteAllTodoData,
    loaderTodo,
    deleteTodosLoader,
    TodoDataById,
    showDataById,
    editTodoData,
  };
};

export default useTodos;