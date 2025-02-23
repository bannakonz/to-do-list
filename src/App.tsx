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

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDetailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDetail(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), title: title, detail: detail }]);
    setTitle("");
    setDetail("");
  };

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <input
          value={title}
          onChange={handleTitleChange}
          placeholder="Title 1"
        />
        <input
          value={detail}
          onChange={handleDetailChange}
          placeholder="Detail 1"
        />
        <button onClick={addTodo}>Add Task</button>
        <hr />
        {todos?.length > 0 ? (
          <ul>
            {todos?.map((item, index) => {
              return (
                <li key={index}>
                  {item.title} ,{item.detail}
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
