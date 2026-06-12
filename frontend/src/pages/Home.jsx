import { useState } from "react";
import TaskCard from "../components/TaskCard.jsx";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  function addTask() {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle || !trimmedDescription) {
      setError("Both title and description are required.");
      return;
    }

    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: trimmedTitle, description: trimmedDescription },
    ]);
    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add Task
      </button>

      {error && <p className="home-error">{error}</p>}

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
