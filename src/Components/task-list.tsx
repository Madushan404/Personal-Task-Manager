import { TaskType } from "../Types/task"

interface TaskListProps {
    tasks: TaskType[]
    updateStatus: (id: string, newStatus: "completed" | "pending") => void
    deleteTask: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    updateStatus,
    deleteTask
}) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks yet. Add some tasks!</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="mb-2 p-2 border rounded">
                            <span
                                className={`mr-2 ${
                                    task.status === "completed"
                                        ? "line-through"
                                        : ""
                                }`}
                            >
                                {task.name}
                            </span>
                            <button
                                className="mr-2 bg-green-500 text-white py-1 px-3 rounded"
                                onClick={() =>
                                    updateStatus(
                                        task.id,
                                        task.status === "completed"
                                            ? "pending"
                                            : "completed"
                                    )
                                }
                            >
                                {task.status === "completed"
                                    ? "Mark as Pending"
                                    : "Mark as Completed"}
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded"
                                onClick={() => deleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TaskList
