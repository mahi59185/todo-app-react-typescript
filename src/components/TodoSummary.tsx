import type { Todo } from "../types/todos";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted,
}: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed).length;

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos}/{todos.length} todos completed
            </p>
            {completedTodos > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className="text-red-500 hover:underline text-sm font-medium"
                >
                    Delete All Completed
                </button>
            )}
        </div>
    );
}