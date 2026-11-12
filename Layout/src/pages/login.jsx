
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            setMessage("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Lấy danh sách tài khoản đã đăng ký
        const registeredUsers = JSON.parse(
            localStorage.getItem("registeredUsers") || "[]"
        );

        // Tìm tài khoản khớp email và mật khẩu
        const foundUser = registeredUsers.find(
            (user) =>
                user.email === email.trim() &&
                user.password === password
        );

        // Nếu không tìm thấy tài khoản
        if (!foundUser) {
            setMessage("Email hoặc mật khẩu không chính xác!");
            return;
        }

        // Đăng nhập thành công
        login({
            name: foundUser.name,
            email: foundUser.email
        });

        // Chuyển về trang chủ
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Đăng nhập</h2>

                <p className="login-subtitle">
                    Chào mừng bạn quay trở lại!
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-form-group">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {message && (
                        <p className="login-message">{message}</p>
                    )}

                    <button type="submit" className="login-button">
                        Đăng nhập
                    </button>
                </form>

                <p className="login-register">
                    Chưa có tài khoản?{" "}
                    <Link to="/register">Đăng ký ngay</Link>
                </p>

                <Link to="/" className="login-home">
                    Quay lại trang chủ
                </Link>
            </div>
        </div>
    );
}

export default Login;
