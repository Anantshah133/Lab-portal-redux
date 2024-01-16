import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./pages/Login"
import DashboardLayout from "./pages/DashboardLayout"
import Computers from "./pages/Computers"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"

const App = () => {
    const { isLoggedIn } = useSelector((state) => state.user)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                    <Route path="/" element={<DashboardLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='computers' element={<Computers />} />
                        <Route path='users' element={<Students />} />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App