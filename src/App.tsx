import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"
import Layout from "./Components/layout"
import AddTask from "./Pages/add-task"
import TaskListPage from "./Pages/task-page"
import TaskPage from "./Pages/task-page"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route path="/tasks" element={<TaskListPage />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/task-page" element={<TaskPage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default App
