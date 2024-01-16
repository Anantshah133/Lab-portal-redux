import { useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = ({ isLoggedIn}) => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate('/login');
    //     }
    // }, [isLoggedIn])
    return (
        isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default ProtectedRoute