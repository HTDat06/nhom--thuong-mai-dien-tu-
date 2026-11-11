
const bcrypt = require("bcryptjs");
const userRepository = require("../Repositories/UserRepository");

class AuthService {
  async register({ name, email, password, phone } = {}) {
    // Kiểm tra họ tên
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

    // Kiểm tra email
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

    // Kiểm tra mật khẩu
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

    // Kiểm tra số điện thoại nếu được cung cấp
    if (phone !== undefined && phone !== null && typeof phone !== "string") {
      const error = new Error("Số điện thoại không hợp lệ.");
      error.statusCode = 400;
      throw error;
    }

    const normalizedPhone = phone?.trim() || null;

    if (normalizedPhone && normalizedPhone.length > 225) {
      const error = new Error("Số điện thoại không hợp lệ.");
      error.statusCode = 400;
      throw error;
    }

    // Kiểm tra email đã tồn tại
    const existingUser = await userRepository.findByEmail(normalizedEmail);

    if (existingUser) {
      const error = new Error("Email này đã được đăng ký.");
      error.statusCode = 409;
      throw error;
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await userRepository.create({
        name: normalizedName,
        email: normalizedEmail,
        password: hashedPassword,
        phone: normalizedPhone,
        role: "customer"
      });

      return {
        message: "Đăng ký tài khoản thành công!",
        user: newUser
      };
    } catch (error) {
      // Xử lý trường hợp hai yêu cầu đăng ký cùng một email
      if (error.code === "P2002") {
        const duplicateError = new Error("Email này đã được đăng ký.");
        duplicateError.statusCode = 409;
        throw duplicateError;
      }

      throw error;
    }
  }
}

module.exports = new AuthService();
