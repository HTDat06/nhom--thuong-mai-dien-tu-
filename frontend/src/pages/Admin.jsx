import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Admin() {
    const { token } = useAuth();
    const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");

    useEffect(() => {
        let cancelled = false;

        fetch("/api/admin", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(async (response) => {
                const result = await response.json();
                if (!response.ok) {
                    throw new Error(result.message || "Không có quyền truy cập.");
                }
                return result;
            })
            .then((result) => {
                if (!cancelled) {
                    setMessage(result.message);
                    setStatus("success");
                }
            })
            .catch((error) => {
                if (!cancelled) {
                    setMessage(error.message);
                    setStatus("error");
                }
            });

        return () => { cancelled = true; };
    }, [token]);

    return (
        <section style={{ width: "90%", maxWidth: 1200, margin: "32px auto" }}>
            <h1>Trang quản trị</h1>
            {status === "loading" ? <p>Đang kiểm tra quyền truy cập...</p> : <p>{message}</p>}
        </section>
    );
}

export default Admin;
