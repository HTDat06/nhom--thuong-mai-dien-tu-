import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/", { replace: true });
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">MyShop</Link>

                <div className="search-box">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    <button type="button">Tìm kiếm</button>
                </div>

                <div className="header-actions">
                    <Link to="/cart" className="header-link">🛒 Giỏ hàng</Link>
                    {user ? (
                        <>
                            {user.role === "admin" && (
                                <Link to="/admin" className="header-link">Quản trị</Link>
                            )}
                            <span className="header-link">Xin chào, {user.name}</span>
                            <button type="button" className="header-link" onClick={handleLogout}>
                                Đăng xuất
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="header-link">Đăng nhập</Link>
                            <Link to="/register" className="header-link">Đăng ký</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
