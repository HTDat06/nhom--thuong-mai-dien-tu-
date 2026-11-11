seed.ts


"use strict";

const bcrypt = require("bcryptjs");

// =============================================
// DỮ LIỆU MẪU
// =============================================

const categories = [
  {
    category_name: "Van hoc",
    description: "Sach van hoc"
  },
  {
    category_name: "Kinh te",
    description: "Sach kinh te"
  },
  {
    category_name: "Ky nang song",
    description: "Sach ky nang song"
  },
  {
    category_name: "Cong nghe",
    description: "Sach cong nghe"
  },
  {
    category_name: "Thieu nhi",
    description: "Sach thieu nhi"
  }
];

const books = [
  // Van hoc: 6 sach
  ["Dac Nhan Tam", "Van hoc", 85000],
  ["Nha Gia Kim", "Van hoc", 79000],
  ["Toi Thay Hoa Vang Tren Co Xanh", "Van hoc", 95000],
  ["Mat Biec", "Van hoc", 110000],
  ["Cho Toi Xin Mot Ve Di Tuoi Tho", "Van hoc", 90000],
  ["Tuoi Tre Dang Gia Bao Nhieu", "Van hoc", 85000],

  // Kinh te: 6 sach
  ["Cha Giau Cha Ngheo", "Kinh te", 120000],
  ["Nha Dau Tu Thong Minh", "Kinh te", 150000],
  ["Think And Grow Rich", "Kinh te", 100000],
  ["Bi Mat Tu Duy Trieu Phu", "Kinh te", 95000],
  ["Quoc Gia Khoi Nghiep", "Kinh te", 130000],
  ["Kinh Te Hoc Vi Mo", "Kinh te", 140000],

  // Ky nang song: 6 sach
  ["Doi Ngan Dung Ngu Dai", "Ky nang song", 75000],
  ["Song Don Gian Cho Minh Thanh Thang", "Ky nang song", 85000],
  ["7 Thoi Quen Hieu Qua", "Ky nang song", 125000],
  ["Dam Bi Ghet", "Ky nang song", 99000],
  ["Khong Gia Dinh", "Ky nang song", 115000],
  ["Suc Manh Cua Thoi Quen", "Ky nang song", 135000],

  // Cong nghe: 6 sach
  ["Lap Trinh JavaScript Co Ban", "Cong nghe", 160000],
  ["Lap Trinh Python", "Cong nghe", 170000],
  ["Clean Code", "Cong nghe", 220000],
  ["Giai Thuat Va Lap Trinh", "Cong nghe", 180000],
  ["Co So Du Lieu", "Cong nghe", 150000],
  ["Lap Trinh Web", "Cong nghe", 175000],

  // Thieu nhi: 6 sach
  ["De Men Phieu Luu Ky", "Thieu nhi", 65000],
  ["Harry Potter", "Thieu nhi", 180000],
  ["Hoang Tu Be", "Thieu nhi", 70000],
  ["Alice O Xu So Than Tien", "Thieu nhi", 85000],
  ["Truyen Co Tich Viet Nam", "Thieu nhi", 60000],
  ["Nhung Tam Long Cao Ca", "Thieu nhi", 95000]
];

const orderStatuses = [
  "pending",
  "confirmed",
  "shipping",
  "completed",
  "cancelled",
  "pending",
  "confirmed",
  "shipping",
  "completed",
  "completed"
];

const categoryNames = categories.map(item => item.category_name);

const customerEmails = Array.from(
  { length: 10 },
  (_, i) => `customer${i + 1}@gmail.com`
);

const adminEmail = "admin@gmail.com";

const orderPhones = Array.from(
  { length: 10 },
  (_, i) => `09100000${String(i + 1).padStart(2, "0")}`
);

const productNames = books.map(book => book[0]);

// =============================================
// HÀM HỖ TRỢ
// =============================================

function placeholders(values) {
  return values.map(() => "?").join(", ");
}

async function selectRows(
  queryInterface,
  Sequelize,
  sql,
  replacements,
  transaction
) {
  return queryInterface.sequelize.query(sql, {
    replacements,
    type: Sequelize.QueryTypes.SELECT,
    transaction
  });
}

// =============================================
// SEED
// =============================================

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction =
      await queryInterface.sequelize.transaction();

    try {
      // -----------------------------------------
      // 1. TẠO 5 DANH MỤC
      // -----------------------------------------

      await queryInterface.bulkInsert(
        "categories",
        categories,
        { transaction }
      );

      console.log("Da tao 5 danh muc.");

      // Lấy ID danh mục
      const categoryRows = await selectRows(
        queryInterface,
        Sequelize,
        `SELECT category_id, category_name
         FROM categories
         WHERE category_name IN (${placeholders(categoryNames)})`,
        categoryNames,
        transaction
      );

      const categoryMap = {};

      categoryRows.forEach(category => {
        categoryMap[category.category_name] =
          category.category_id;
      });

      if (categoryRows.length !== 5) {
        throw new Error("Khong tim thay du 5 danh muc.");
      }

      // -----------------------------------------
      // 2. TẠO 30 SÁCH
      // -----------------------------------------

      const productData = books.map(book => ({
        product_name: book[0],
        category_id: categoryMap[book[1]],
        description: `Mo ta sach ${book[0]}`,
        price: book[2],
        stock: 100,
        image: null
      }));

      await queryInterface.bulkInsert(
        "products",
        productData,
        { transaction }
      );

      console.log("Da tao 30 sach.");

      // Lấy ID sách
      const productRows = await selectRows(
        queryInterface,
        Sequelize,
        `SELECT product_id, product_name, price
         FROM products
         WHERE product_name IN (${placeholders(productNames)})`,
        productNames,
        transaction
      );

      const productMap = {};

      productRows.forEach(product => {
        productMap[product.product_name] = {
          product_id: product.product_id,
          price: Number(product.price)
        };
      });

      if (productRows.length !== 30) {
        throw new Error("Khong tim thay du 30 sach.");
      }

      // -----------------------------------------
      // 3. TẠO 1 ADMIN VÀ 10 KHÁCH HÀNG
      // -----------------------------------------

      const passwordHash = await bcrypt.hash(
        "123456",
        10
      );

      const users = [
        {
          name: "Administrator",
          email: adminEmail,
          password: passwordHash,
          phone: "0900000000",
          role: "admin"
        }
      ];

      for (let i = 1; i <= 10; i++) {
        users.push({
          name: `Khach hang ${i}`,
          email: customerEmails[i - 1],
          password: passwordHash,
          phone: `09000000${String(i).padStart(2, "0")}`,
          role: "customer"
        });
      }

      await queryInterface.bulkInsert(
        "Users",
        users,
        { transaction }
      );

      console.log("Da tao 1 Admin va 10 khach hang.");

      // Lấy ID người dùng
      const allEmails = [adminEmail, ...customerEmails];

      const userRows = await selectRows(
        queryInterface,
        Sequelize,
        `SELECT user_id, email
         FROM Users
         WHERE email IN (${placeholders(allEmails)})`,
        allEmails,
        transaction
      );

      const userMap = {};

      userRows.forEach(user => {
        userMap[user.email] = user.user_id;
      });

      if (userRows.length !== 11) {
        throw new Error("Khong tim thay du 11 tai khoan.");
      }

      // -----------------------------------------
      // 4. TẠO 10 ĐƠN HÀNG
      // -----------------------------------------

      const orders = [];
      const orderDetails = [];

      for (let i = 0; i < 10; i++) {
        const customerEmail = customerEmails[i];

        // Mỗi khách hàng đặt 2 sách
        const book1 = books[i * 2];
        const book2 = books[i * 2 + 1];

        const product1 = productMap[book1[0]];
        const product2 = productMap[book2[0]];

        const quantity1 = 1;
        const quantity2 = 2;

        const subtotal1 = product1.price * quantity1;
        const subtotal2 = product2.price * quantity2;

        const totalAmount = subtotal1 + subtotal2;

        const phone = orderPhones[i];

        orders.push({
          user_id: userMap[customerEmail],
          total_amount: totalAmount,
          shipping_address: `Dia chi giao hang ${i + 1}`,
          phone: phone,
          status: orderStatuses[i]
        });

        orderDetails.push({
          phone: phone,
          product_id_1: product1.product_id,
          product_id_2: product2.product_id,
          quantity_1: quantity1,
          quantity_2: quantity2,
          price_1: product1.price,
          price_2: product2.price,
          subtotal_1: subtotal1,
          subtotal_2: subtotal2
        });
      }

      await queryInterface.bulkInsert(
        "orders",
        orders,
        { transaction }
      );

      console.log("Da tao 10 don hang.");

      // Lấy ID đơn hàng theo số điện thoại riêng
      const orderRows = await selectRows(
        queryInterface,
        Sequelize,
        `SELECT order_id, phone
         FROM orders
         WHERE phone IN (${placeholders(orderPhones)})`,
        orderPhones,
        transaction
      );

      const orderMap = {};

      orderRows.forEach(order => {
        orderMap[order.phone] = order.order_id;
      });

      if (orderRows.length !== 10) {
        throw new Error("Khong tim thay du 10 don hang.");
      }

      // -----------------------------------------
      // 5. TẠO 20 CHI TIẾT ĐƠN HÀNG
      // -----------------------------------------

      const orderItems = [];

      orderDetails.forEach(detail => {
        const orderId = orderMap[detail.phone];

        orderItems.push(
          {
            order_id: orderId,
            product_id: detail.product_id_1,
            quantity: detail.quantity_1,
            price: detail.price_1,
            subtotal: detail.subtotal_1
          },
          {
            order_id: orderId,
            product_id: detail.product_id_2,
            quantity: detail.quantity_2,
            price: detail.price_2,
            subtotal: detail.subtotal_2
          }
        );
      });

      await queryInterface.bulkInsert(
        "order_items",
        orderItems,
        { transaction }
      );

      console.log("Da tao 20 chi tiet don hang.");

      // Hoàn tất transaction
      await transaction.commit();

      console.log("--------------------------------");
      console.log("SEED DATA THANH CONG!");
      console.log("5 danh muc");
      console.log("30 sach");
      console.log("1 Admin");
      console.log("10 khach hang");
      console.log("10 don hang");
      console.log("20 chi tiet don hang");
      console.log("--------------------------------");

    } catch (error) {
      await transaction.rollback();
      console.error("SEED DATA THAT BAI:", error);
      throw error;
    }
  },

  // =============================================
  // HOÀN TÁC SEED
  // =============================================

  async down(queryInterface, Sequelize) {
    const transaction =
      await queryInterface.sequelize.transaction();

    try {
      // 1. Lấy ID 10 đơn hàng mẫu
      const orderRows = await selectRows(
        queryInterface,
        Sequelize,
        `SELECT order_id
         FROM orders
         WHERE phone IN (${placeholders(orderPhones)})`,
        orderPhones,
        transaction
      );

      const orderIds = orderRows.map(
        order => order.order_id
      );

      // 2. Xóa chi tiết đơn hàng
      if (orderIds.length > 0) {
        await queryInterface.bulkDelete(
          "order_items",
          { order_id: orderIds },
          { transaction }
        );
      }

      // 3. Xóa đơn hàng mẫu
      await queryInterface.bulkDelete(
        "orders",
        { phone: orderPhones },
        { transaction }
      );

      // 4. Lấy ID tài khoản mẫu
      const allEmails = [adminEmail, ...customerEmails];

      const userRows = await selectRows(
        queryInterface,
        Sequelize,
        `SELECT user_id
         FROM Users
         WHERE email IN (${placeholders(allEmails)})`,
        allEmails,
        transaction
      );

      const userIds = userRows.map(
        user => user.user_id
      );

      // 5. Xóa giỏ hàng của các tài khoản mẫu
      if (userIds.length > 0) {
        await queryInterface.bulkDelete(
          "cart_items",
          { user_id: userIds },
          { transaction }
        );
      }

      // 6. Xóa tài khoản mẫu
      await queryInterface.bulkDelete(
        "Users",
        { email: allEmails },
        { transaction }
      );

      // 7. Xóa sách mẫu
      await queryInterface.bulkDelete(
        "products",
        { product_name: productNames },
        { transaction }
      );

      // 8. Xóa danh mục mẫu
      await queryInterface.bulkDelete(
        "categories",
        { category_name: categoryNames },
        { transaction }
      );

      await transaction.commit();

      console.log("UNDO SEED THANH CONG!");

    } catch (error) {
      await transaction.rollback();
      console.error("UNDO SEED THAT BAI:", error);
      throw error;
    }
  }
};



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
