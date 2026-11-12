import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { RequireAdmin } from "./components/ProtectedRoute";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                    <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
                    <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
                    <Route element={<RequireAdmin />}>
                        <Route path="/admin" element={<MainLayout><Admin /></MainLayout>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
