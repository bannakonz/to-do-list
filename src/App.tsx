import "./App.css";
import { ChangeEvent, useState } from "react";

interface TodosProps {
  id: number;
  title: string;
  detail: string;
}

function App() {
  const [todos, setTodos] = useState<TodosProps[]>([
    {
      id: 1,
      title: "Title 1",
      detail: "Description 1",
    },
    {
      id: 2,
      title: "Title 2",
      detail: "Description 2",
    },
    {
      id: 3,
      title: "Title 3",
      detail: "Description 3",
    },
  ]);

  const [form, setForm] = useState({ title: "", detail: "" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    if (!form.title.trim() || !form.detail.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), title: form.title.trim(), detail: form.detail.trim() },
    ]);
    setForm({ title: "", detail: "" });
  };

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <input
          name="title"
          value={form.title}
          onChange={handleInputChange}
          placeholder="Enter task title"
        />
        <input
          name="detail"
          value={form.detail}
          onChange={handleInputChange}
          placeholder="Enter task detail"
        />
        <button onClick={addTodo}>Add Task</button>
        <hr />
        {todos?.length > 0 ? (
          <ul>
            {todos?.map((item, index) => {
              return (
                <li key={`todoItem-${item.id}-${index}`}>
                  <strong>{item.title}</strong>: {item.detail}
                </li>
              );
            })}
          </ul>
        ) : (
          <div>No Tasks yet</div>
        )}
      </div>
    </>
  );
}

export default App;
