import TodoItem from "./TodoItem";
import type { Todo } from "../types/todos";

interface TodoListProps {
    todos: Todo[];
    oncompletedChange: (id: number, completed: boolean) => void;
    ondelete: (id: number) => void;
}
export default function TodoList(
{ todos, oncompletedChange, ondelete }: TodoListProps
){
    const todosorted = [...todos].sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id; // Sort by id in descending order if completed status is the same
        }
        return a.completed ? 1 : -1; // Move completed todos to the bottom
    });
     
    return (
        <>
           <div className="space-y-2">
          {todosorted.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={oncompletedChange}
                onDelete={ondelete}
            />
          ))}
        </div>
              {todos.length === 0 && (
                <p className="text-center text-sm text-gray-500">
                     No todos found. Add a new todo to get started!
                </p>
                )}
        </>
    );
}