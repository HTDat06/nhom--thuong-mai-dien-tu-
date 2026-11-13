
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../services/authService";
import "../styles/register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (password.length < 6) {
            setMessage("Mật khẩu phải có ít nhất 6 ký tự.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Mật khẩu xác nhận không khớp.");
            return;
        }

        if (phone.trim() && !/^0\d{9}$/.test(phone.trim())) {
            setMessage("Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0.");
            return;
        }

        setLoading(true);

        try {
            const result = await registerRequest({
                name,
                email,
                phone: phone.trim() || null,
                password
            });

            navigate("/login", {
                replace: true,
                state: {
                    message: `${result.message} Vui lòng đăng nhập.`
                },
            });
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
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

                    {/* Trường số điện thoại mới */}
                    <div className="register-form-group">
                        <label>Số điện thoại</label>
                        <input
                            type="tel"
                            placeholder="Nhập số điện thoại"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            maxLength={10}
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

                    <button
                        type="submit"
                        className="register-button"
                        disabled={loading}
                    >
                        {loading ? "Đang đăng ký..." : "Đăng ký"}
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
