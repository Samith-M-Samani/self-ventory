import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Home
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create and manage your tasks here.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Create a New Task
          </h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              type="button"
              onClick={addTask}
              className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium"
            >
              Add Task
            </button>
          </div>

          {error && <p className="home-error">{error}</p>}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Your Tasks
          </h2>
          {tasks.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No tasks yet. Create one to get started!
            </p>
          ) : (
            <div className="task-list">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
