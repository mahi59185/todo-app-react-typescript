import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
    const [inputValue, setInputValue] = useState("");
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Handle form submission logic here
        if(!inputValue.trim()) return;
        onSubmit(inputValue.trim());
        setInputValue("");
    }
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                placeholder="What needs to be done?"
                className=" rounded-s-md grow border border-gray-400 p-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button
                type="submit"
                className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
                Add
            </button>
        </form>
    );
}
