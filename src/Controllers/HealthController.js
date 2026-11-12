
const prisma = require("../config/prisma");

const checkDatabase = async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1 AS connected`;

        return res.status(200).json({
            success: true,
            message: "Kết nối SQL Server thành công!",
            database: "ecommerce",
            status: "connected"
        });
    } catch (error) {
        console.error("Database connection error:", error.message);

        return res.status(503).json({
            success: false,
            message: "Không thể kết nối SQL Server",
            status: "disconnected"
        });
    }
};

module.exports = {
    checkDatabase
};
