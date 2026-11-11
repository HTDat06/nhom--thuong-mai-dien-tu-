seed.ts

import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaMssql } from "@prisma/adapter-mssql";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMssql({
  server: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  options: { encrypt: true, trustServerCertificate: true },
});
const prisma = new PrismaClient({ adapter });

const categories = [
  { name: "Văn học", desc: "Tiểu thuyết, truyện ngắn, thơ trong và ngoài nước" },
  { name: "Kinh tế - Kỹ năng sống", desc: "Sách quản trị, tài chính cá nhân, phát triển bản thân" },
  { name: "Thiếu nhi", desc: "Truyện tranh, truyện cổ tích, sách kiến thức cho bé" },
  { name: "Khoa học - Công nghệ", desc: "Khoa học tự nhiên, lập trình, trí tuệ nhân tạo" },
  { name: "Lịch sử - Xã hội", desc: "Lịch sử Việt Nam, thế giới và nhân văn" },
];

// [chỉ số danh mục, tên sách, tác giả, giá]
const books: [number, string, string, number][] = [
  [0, "Dế Mèn phiêu lưu ký", "Tô Hoài", 68000],
  [0, "Tắt đèn", "Ngô Tất Tố", 52000],
  [0, "Số đỏ", "Vũ Trọng Phụng", 75000],
  [0, "Truyện Kiều", "Nguyễn Du", 89000],
  [0, "Mắt biếc", "Nguyễn Nhật Ánh", 110000],
  [0, "Cho tôi xin một vé đi tuổi thơ", "Nguyễn Nhật Ánh", 95000],
  [1, "Đắc nhân tâm", "Dale Carnegie", 86000],
  [1, "Cha giàu, cha nghèo", "Robert T. Kiyosaki", 99000],
  [1, "Tư duy nhanh và chậm", "Daniel Kahneman", 189000],
  [1, "Thói quen nguyên tử", "James Clear", 139000],
  [1, "Nghĩ giàu và làm giàu", "Napoleon Hill", 115000],
  [1, "Quốc gia khởi nghiệp", "Dan Senor, Saul Singer", 165000],
  [2, "Hoàng tử bé", "Antoine de Saint-Exupéry", 59000],
  [2, "Kính vạn hoa - Tập 1", "Nguyễn Nhật Ánh", 72000],
  [2, "Truyện cổ Grimm", "Anh em nhà Grimm", 98000],
  [2, "Truyện cổ Andersen", "H. C. Andersen", 92000],
  [2, "Tuyển tập truyện cổ tích Việt Nam", "Nhiều tác giả", 79000],
  [2, "Bách khoa toàn thư cho bé: Động vật", "Nhiều tác giả", 125000],
  [3, "Lược sử thời gian", "Stephen Hawking", 108000],
  [3, "Vũ trụ trong vỏ hạt dẻ", "Stephen Hawking", 118000],
  [3, "Clean Code: Mã sạch", "Robert C. Martin", 210000],
  [3, "Nhập môn Trí tuệ nhân tạo", "Nhiều tác giả", 175000],
  [3, "Cơ sở dữ liệu quan hệ và SQL", "Nhiều tác giả", 145000],
  [3, "Lập trình Python cho người mới bắt đầu", "Nhiều tác giả", 135000],
  [4, "Sapiens: Lược sử loài người", "Yuval Noah Harari", 199000],
  [4, "Việt Nam sử lược", "Trần Trọng Kim", 155000],
  [4, "Đại Việt sử ký toàn thư", "Ngô Sĩ Liên", 250000],
  [4, "Súng, vi trùng và thép", "Jared Diamond", 185000],
  [4, "Nhật ký trong tù", "Hồ Chí Minh", 49000],
  [4, "Homo Deus: Lược sử tương lai", "Yuval Noah Harari", 189000],
];

const customerNames = [
  "Nguyễn Văn An", "Trần Thị Bình", "Lê Hoàng Cường", "Phạm Thu Dung", "Võ Minh Đức",
  "Đặng Ngọc Hà", "Bùi Quốc Huy", "Hồ Thị Lan", "Ngô Thanh Nam", "Dương Mỹ Linh",
];

const addresses = [
  "12 Nguyễn Huệ, Q.1, TP.HCM", "45 Lê Lợi, Q.1, TP.HCM", "78 Trần Hưng Đạo, Q.5, TP.HCM",
  "23 Hai Bà Trưng, Hoàn Kiếm, Hà Nội", "9 Nguyễn Trãi, Thanh Xuân, Hà Nội",
  "101 Bạch Đằng, Hải Châu, Đà Nẵng", "56 Lý Thường Kiệt, Q.10, TP.HCM",
  "34 Phan Chu Trinh, Ninh Kiều, Cần Thơ", "88 Điện Biên Phủ, Bình Thạnh, TP.HCM",
  "17 Trần Phú, Nha Trang, Khánh Hòa",
];

const statuses = [
  "pending", "pending", "pending", "confirmed", "confirmed",
  "shipping", "shipping", "completed", "completed", "cancelled",
];

async function main() {
  // Xóa theo thứ tự con -> cha để chạy lại được nhiều lần
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // 1 admin + 10 khách hàng
  await prisma.user.create({
    data: {
      name: "Quản trị viên", email: "admin@bookstore.vn", phone: "0900000000",
      password: await bcrypt.hash("Admin@123", 10),
    },
  });
  const customerHash = await bcrypt.hash("123456", 10);
  const customers = [];
  for (const [i, name] of customerNames.entries()) {
    customers.push(await prisma.user.create({
      data: {
        name,
        email: `khach${String(i + 1).padStart(2, "0")}@example.com`,
        password: customerHash,
        phone: `0901234${String(i).padStart(3, "0")}`,
      },
    }));
  }

  // 5 danh mục
  const cats = [];
  for (const c of categories) {
    cats.push(await prisma.category.create({
      data: { categoryName: c.name, description: c.desc },
    }));
  }

  // 30 sách
  const products = [];
  for (const [i, [ci, title, author, price]] of books.entries()) {
    products.push(await prisma.product.create({
      data: {
        categoryId: cats[ci].categoryId,
        productName: title,
        description: `Tác giả: ${author}.`,
        price,
        stock: 20 + ((i * 7) % 60),
        image: `/images/books/book-${String(i + 1).padStart(2, "0")}.jpg`,
      },
    }));
  }

  // 10 đơn hàng, nhiều trạng thái; subtotal = quality x price, total = tổng subtotal
  for (let i = 0; i < 10; i++) {
    const lines = Array.from({ length: 1 + (i % 3) }, (_, k) => {
      const p = products[(i * 3 + k * 7) % 30];
      const quality = 1 + ((i + k) % 3);
      const price = Number(p.price);
      return { productId: p.productId, quality, price, subtotal: quality * price };
    });
    await prisma.order.create({
      data: {
        userId: customers[i].userId,
        totalAmount: lines.reduce((s, l) => s + l.subtotal, 0),
        shippingAddress: addresses[i],
        phone: customers[i].phone,
        status: statuses[i],
        items: { create: lines },
      },
    });
  }

  console.log("Seed xong: 11 users, 5 categories, 30 products, 10 orders");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());




migration



"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Bảng Users
    await queryInterface.createTable("Users", {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(225),
        allowNull: true
      }
    });

    // 2. Bảng categories
    await queryInterface.createTable("categories", {
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      category_name: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    });

    // 3. Bảng products
    await queryInterface.createTable("products", {
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "category_id"
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION"
      },
      product_name: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      image: {
        type: Sequelize.STRING(225),
        allowNull: true
      }
    });

    // 4. Bảng cart_items
    await queryInterface.createTable("cart_items", {
      cart_item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "user_id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "product_id"
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION"
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
    });

    // 5. Bảng orders
    await queryInterface.createTable("orders", {
      order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "user_id"
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION"
      },
      total_amount: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
      },
      shipping_address: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(225),
        allowNull: false
      }
    });

    // 6. Bảng order_items
    await queryInterface.createTable("order_items", {
      order_items_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "orders",
          key: "order_id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "product_id"
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION"
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
      },
      subtotal: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    // Xóa theo thứ tự ngược lại để tránh lỗi khóa ngoại
    await queryInterface.dropTable("order_items");
    await queryInterface.dropTable("orders");
    await queryInterface.dropTable("cart_items");
    await queryInterface.dropTable("products");
    await queryInterface.dropTable("categories");
    await queryInterface.dropTable("Users");
  }
};
