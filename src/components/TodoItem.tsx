import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todos";

type Props = {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onCompletedChange, onDelete }: Props) => {
  return (
    <div className="flex item center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) =>
            onCompletedChange(todo.id, e.target.checked)
          }
          className="scale-125"
        />

        <span
          className={
            todo.completed
              ? "line-through text-gray-500"
              : "text-gray-900"
          }
        >
          {todo.title}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 hover:bg-slate-200 rounded-md"
      >
        <Trash2 size={20} className="text-gray-500 " />
      </button>
    </div>
  );
};

export default TodoItem;