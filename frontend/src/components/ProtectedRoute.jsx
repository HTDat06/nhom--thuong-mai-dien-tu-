import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function RequireAuth() {
    const { user, token } = useAuth();
    return user && token ? <Outlet /> : <Navigate to="/login" replace />;
}

export function RequireAdmin() {
    const { user, token } = useAuth();

    if (!user || !token) {
        return <Navigate to="/login" replace />;
    }

    return user.role === "admin"
        ? <Outlet />
        : <Navigate to="/" replace />;
}
