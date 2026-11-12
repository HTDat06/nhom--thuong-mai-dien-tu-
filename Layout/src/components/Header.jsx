
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <Link to="/" className="logo">
                    MyShop
                </Link>

                {/* Ô tìm kiếm */}
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                    />
                    <button type="button">Tìm kiếm</button>
                </div>

                {/* Các chức năng */}
                <div className="header-actions">

                    <Link to="/cart" className="header-link">
                        🛒 Giỏ hàng
                    </Link>

                    {user ? (
                        <>
                            <span className="header-link">
                                Xin chào, {user.name}
                            </span>

                            <button
                                type="button"
                                className="header-link"
                                onClick={logout}
                            >
                                Đăng xuất
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="header-link">
                                Đăng nhập
                            </Link>

                            <Link to="/register" className="header-link">
                                Đăng ký
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </header>
    );
}

export default Header;
