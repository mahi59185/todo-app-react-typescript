import { useEffect, useState } from "react";
import type { Todo } from "../types/todos";
import { dummyData } from "../data/dummyData";

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    try {
      const parsed = saved ? (JSON.parse(saved) as Todo[]) : [];
      return parsed.length > 0 ? parsed : dummyData;
    } catch {
      return dummyData;
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      { id: Date.now(), title, completed: false },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  };
}