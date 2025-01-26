export default function TaskItem({ task, onToggle, onDelete }) {
    return (
      <div className="flex justify-between items-center text-gray-500 bg-gray-5 p-4 rounded-lg shadow-md">
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="mr-2"
          />
          <span className={task.completed ? "line-through text-gray-500" : ""}>
            {task.title}
          </span>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          Видалити
        </button>
      </div>
    );
  }
  