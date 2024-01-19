import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./pages/login/Login"
import DashboardLayout from "./pages/DashboardLayout"
import Computers from "./pages/computers/Computers"
import Dashboard from "./pages/dashboard/Dashboard"
import Students from "./pages/students/Students"
import AddStudent from "./pages/students/AddStudent"
import AddEditComputer from "./pages/computers/AddEditComputer"

const App = () => {
    const { isLoggedIn } = useSelector((state) => state.user)

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} />}> */}
                    <Route path="/" element={<DashboardLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='computers' element={<Computers />} />
                        <Route path='users' element={<Students />} />
                        <Route path='users/add-student' element={<AddStudent />} />
                        <Route path='users/edit-student/:id' element={<AddStudent />} />
                        <Route path='computers/add-computer' element={<AddEditComputer />} />
                        <Route path='computers/edit-computer/:id' element={<AddEditComputer />} />
                    </Route>
                {/* </Route> */}
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App