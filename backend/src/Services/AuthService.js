const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRepository = require("../Repositories/UserRepository");

class AuthService {
  async register({ name, email, password, phone } = {}) {
    if (typeof name !== "string" || !name.trim()) {
      const error = new Error("Vui lòng nhập họ và tên.");
      error.statusCode = 400;
      throw error;
    }

    const normalizedName = name.trim();
    if (normalizedName.length > 225) {
      const error = new Error("Họ và tên không được vượt quá 225 ký tự.");
      error.statusCode = 400;
      throw error;
    }

    if (typeof email !== "string" || !email.trim()) {
      const error = new Error("Vui lòng nhập email.");
      error.statusCode = 400;
      throw error;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      const error = new Error("Email không đúng định dạng.");
      error.statusCode = 400;
      throw error;
    }
    if (normalizedEmail.length > 225) {
      const error = new Error("Email không được vượt quá 225 ký tự.");
      error.statusCode = 400;
      throw error;
    }

    if (typeof password !== "string" || !password) {
      const error = new Error("Vui lòng nhập mật khẩu.");
      error.statusCode = 400;
      throw error;
    }
    if (password.length < 6) {
      const error = new Error("Mật khẩu phải có ít nhất 6 ký tự.");
      error.statusCode = 400;
      throw error;
    }

    if (phone !== undefined && phone !== null && typeof phone !== "string") {
      const error = new Error("Số điện thoại không hợp lệ.");
      error.statusCode = 400;
      throw error;
    }
    const normalizedPhone = phone?.trim() || null;

    const existingUser = await userRepository.findByEmail(normalizedEmail);
    if (existingUser) {
      const error = new Error("Email này đã được đăng ký.");
      error.statusCode = 409;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const newUser = await userRepository.create({
        name: normalizedName,
        email: normalizedEmail,
        password: hashedPassword,
        phone: phone?.trim() || null,
        role: "customer"
      });
      return {
        message: "Đăng ký tài khoản thành công!",
        user: newUser
      };
    } catch (error) {
      if (error.code === "P2002") {
        const duplicateError = new Error("Email này đã được đăng ký.");
        duplicateError.statusCode = 409;
        throw duplicateError;
      }
      throw error;
    }
  }

  async login({ email, password } = {}) {
    if (typeof email !== "string" || !email.trim() ||
      typeof password !== "string" || !password) {
      const error = new Error("Vui lòng nhập đầy đủ email và mật khẩu.");
      error.statusCode = 400;
      throw error;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await userRepository.findByEmail(normalizedEmail);

    // Dùng cùng một thông báo để không tiết lộ email có tồn tại hay không.
    if (!user || !(await bcrypt.compare(password, user.password))) {
      const error = new Error("Email hoặc mật khẩu không chính xác.");
      error.statusCode = 401;
      throw error;
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("Thiếu cấu hình JWT_SECRET trong file .env.");
    }

    const safeUser = {
      user_id: user.user_id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role
    };

    const token = jwt.sign(
      { user_id: user.user_id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    return { message: "Đăng nhập thành công!", user: safeUser, token };
  }
}

module.exports = new AuthService();
