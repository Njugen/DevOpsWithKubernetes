import { useState, type FormEvent } from "react";

const Index = () => {
    const [todoList, setTodoList] = useState<string[]>([
        "Teach React",
        "Teach NextJS",
        "Dispose of NoSQL databases",
        "Harass script-kiddies",
        "Scold typescript neglectors"
    ]);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const value: string = formData.get("todo-text-field") as string;

        if(value.length < 1) return;
        if(value.length > 140) {
            alert("Hmm, trying injections are we? 140 characters max!");
            e.currentTarget.reset();
            return;
        }

        setTodoList([...todoList, value]);
        e.currentTarget.reset();
    }

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="max-h-100 w-auto space-y-4">
                <h1>The project app</h1>
                <img src="/storage/random-image.jpg" alt="Random image" className="h-75 w-auto rounded-md" />
                <form method="post" className="space-x-4" onSubmit={handleFormSubmit}>
                    <input name="todo-text-field" type="text" maxLength={140} className="p-0.5 rounded-sm border border-gray-600" />
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 cursor-pointer">Create todo</button>
                </form>
                <ul className="list-disc">
                    {todoList.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Index;