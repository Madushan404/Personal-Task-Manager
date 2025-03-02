import { TaskType } from "../Types/task";

interface TaskListProps {
    tasks: TaskType[];
    updateStatus: (id: string, newStatus: "completed" | "pending") => void;
    deleteTask: (id: string) => void;
    setTaskToEdit: React.Dispatch<React.SetStateAction<TaskType | null>>; 
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    updateStatus,
    deleteTask,
    setTaskToEdit,
}) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks yet. Add some tasks!</p>
            ) : (
                <div className="mx-auto bg-[#E8F9FF]">
                    <ul>
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                className="mb-2 p-3 border-0.5 rounded shadow-md"
                            >
                                <span
                                    className={`mr-2 ${
                                        task.status === "completed" ? "line-through" : ""
                                    }`}
                                >
                                    {task.name}
                                </span>

                                <div className="flex justify-end items-center gap-2">
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
                                        className="mr-2 bg-yellow-500 text-white py-1 px-3 rounded"
                                        onClick={() => setTaskToEdit(task)} 
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white py-1 px-3 rounded"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TaskList;
