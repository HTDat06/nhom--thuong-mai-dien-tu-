
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import MainLayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <MainLayout>
                                <Login />
                            </MainLayout>
                        }
                    />

                    <Route
                        path="/register"
                        element={
                            <MainLayout>
                                <Register />
                            </MainLayout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
