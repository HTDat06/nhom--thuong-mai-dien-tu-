
const prisma = require("../config/prisma");

class UserRepository {
  // Tìm tài khoản theo email
  async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email }
    });
  }

  // Tạo tài khoản mới
  async create(data) {
    return prisma.user.create({
      data,
      select: {
        user_id: true,
        name: true,
        email: true,
        phone: true,
        role: true
      }
    });
  }
}

module.exports = new UserRepository();
