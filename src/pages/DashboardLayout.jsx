import { Outlet } from "react-router-dom"
import Aside from "../components/Aside"
import Navbar from "../components/Navbar"

const DashboardLayout = () => {
    return (
        <div className="bg-gray-200 h-screen">
            <Navbar />
            <Aside />
            <div className="p-4 sm:ml-64 h-full mt-16">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout