const authService = require("../Services/AuthService");

class AuthController {
  async register(req, res) {
    try {
      const result = await authService.register(req.body || {});
      return res.status(201).json({
        success: true,
        message: result.message,
        user: result.user
      });
    } catch (error) {
      console.error("Register error:", error);
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.statusCode
          ? error.message
          : "Đã xảy ra lỗi máy chủ. Vui lòng thử lại sau."
      });
    }
  }

  async login(req, res) {
    try {
      const result = await authService.login(req.body || {});
      return res.status(200).json({
        success: true,
        message: result.message,
        token: result.token,
        user: result.user
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.statusCode
          ? error.message
          : "Đã xảy ra lỗi máy chủ. Vui lòng thử lại sau."
      });
    }
  }
}

module.exports = new AuthController();
