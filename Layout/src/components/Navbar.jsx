import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const categories = [
        "Trang chủ",
        "VGA",
        "RAM",
        "CPU",
        "Mainboard",
        "SSD",
        "PSU",
        "Case PC",
        "Tản nhiệt"
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰ Danh mục
                </button>

                <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
                    {categories.map((category, index) => (
                        <li key={category}>
                            <a href={index === 0 ? "/" : "#"}>
                                {category}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;