import { useEffect, useState } from "react";
import { fetchTasks, addTask, deleteTask, updateTask } from "./services/api";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const handleAdd = async (title) => {
    const newTask = await addTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = async (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = await updateTask(id, {
      ...task,
      completed: !task.completed,
    });
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}
