import { useEffect, useState } from "react"
import TaskList from "../Components/task-list"
import { TaskType } from "../Types/task"

const TaskPage = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])

    useEffect(() => {
        const savedTasks = JSON.parse(
            localStorage.getItem("tasks") || "[]"
        ) as TaskType[]
        setTasks(savedTasks)
    }, [])

    const updateTaskStatus = (
        id: string,
        newStatus: "completed" | "pending"
    ) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
        )
        setTasks(updatedTasks)
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    }

    const deleteTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <TaskList
                tasks={tasks}
                updateStatus={updateTaskStatus}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default TaskPage
