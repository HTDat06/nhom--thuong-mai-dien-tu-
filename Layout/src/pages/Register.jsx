
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Đã bấm nút đăng ký!");

        if (password.length < 6) {
            setMessage("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Mật khẩu xác nhận không khớp!");
            return;
        }

        const registeredUsers = JSON.parse(
            localStorage.getItem("registeredUsers") || "[]"
        );

        const existingUser = registeredUsers.find(
            (user) => user.email === email.trim()
        );

        if (existingUser) {
            setMessage("Email này đã được đăng ký!");
            return;
        }

        const newUser = {
            name: name.trim(),
            email: email.trim(),
            password: password
        };

        registeredUsers.push(newUser);

        localStorage.setItem(
            "registeredUsers",
            JSON.stringify(registeredUsers)
        );

        login({
            name: newUser.name,
            email: newUser.email
        });

        navigate("/");
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Đăng ký tài khoản</h2>
                <p className="register-subtitle">
                    Tạo tài khoản để mua sắm dễ dàng hơn
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="register-form-group">
                        <label>Họ và tên</label>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="register-form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="register-form-group">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="register-form-group">
                        <label>Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {message && (
                        <p className="register-message">{message}</p>
                    )}

                    <button type="submit" className="register-button">
                        Đăng ký
                    </button>
                </form>

                <p className="register-login">
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
