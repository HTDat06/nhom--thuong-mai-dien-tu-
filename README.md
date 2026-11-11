seed.ts


"use strict";

const bcrypt = require("bcryptjs");
const { QueryTypes } = require("sequelize");

// 5 danh mục linh kiện máy tính
const categories = [
  {
    category_name: "CPU - Bộ vi xử lý",
    description: "Các loại bộ vi xử lý máy tính"
  },
  {
    category_name: "Mainboard - Bo mạch chủ",
    description: "Các loại bo mạch chủ máy tính"
  },
  {
    category_name: "RAM - Bộ nhớ",
    description: "Các loại bộ nhớ RAM"
  },
  {
    category_name: "VGA - Card màn hình",
    description: "Các loại card đồ họa"
  },
  {
    category_name: "Ổ cứng - Lưu trữ",
    description: "Các loại ổ cứng SSD và HDD"
  }
];

// 30 sản phẩm linh kiện máy tính
const products = [
  // CPU
  {
    product_name: "Intel Core i3-12100F",
    category_name: "CPU - Bộ vi xử lý",
    price: 1890000,
    stock: 20
  },
  {
    product_name: "Intel Core i5-12400F",
    category_name: "CPU - Bộ vi xử lý",
    price: 2990000,
    stock: 15
  },
  {
    product_name: "Intel Core i5-13400F",
    category_name: "CPU - Bộ vi xử lý",
    price: 4290000,
    stock: 12
  },
  {
    product_name: "Intel Core i7-13700K",
    category_name: "CPU - Bộ vi xử lý",
    price: 8990000,
    stock: 8
  },
  {
    product_name: "AMD Ryzen 5 5600",
    category_name: "CPU - Bộ vi xử lý",
    price: 2490000,
    stock: 18
  },
  {
    product_name: "AMD Ryzen 7 5700X",
    category_name: "CPU - Bộ vi xử lý",
    price: 3990000,
    stock: 10
  },

  // Mainboard
  {
    product_name: "ASUS PRIME H610M-K",
    category_name: "Mainboard - Bo mạch chủ",
    price: 1790000,
    stock: 15
  },
  {
    product_name: "MSI PRO B760M-E",
    category_name: "Mainboard - Bo mạch chủ",
    price: 2390000,
    stock: 12
  },
  {
    product_name: "Gigabyte B760M DS3H",
    category_name: "Mainboard - Bo mạch chủ",
    price: 2990000,
    stock: 10
  },
  {
    product_name: "ASUS TUF GAMING B550M-PLUS",
    category_name: "Mainboard - Bo mạch chủ",
    price: 3290000,
    stock: 8
  },
  {
    product_name: "MSI MAG B650 TOMAHAWK",
    category_name: "Mainboard - Bo mạch chủ",
    price: 5690000,
    stock: 6
  },
  {
    product_name: "Gigabyte A520M S2H",
    category_name: "Mainboard - Bo mạch chủ",
    price: 1490000,
    stock: 14
  },

  // RAM
  {
    product_name: "Kingston Fury Beast 8GB DDR4",
    category_name: "RAM - Bộ nhớ",
    price: 490000,
    stock: 30
  },
  {
    product_name: "Kingston Fury Beast 16GB DDR4",
    category_name: "RAM - Bộ nhớ",
    price: 890000,
    stock: 25
  },
  {
    product_name: "Corsair Vengeance 16GB DDR4",
    category_name: "RAM - Bộ nhớ",
    price: 990000,
    stock: 20
  },
  {
    product_name: "Kingston Fury Beast 16GB DDR5",
    category_name: "RAM - Bộ nhớ",
    price: 1390000,
    stock: 18
  },
  {
    product_name: "Corsair Vengeance 32GB DDR5",
    category_name: "RAM - Bộ nhớ",
    price: 2590000,
    stock: 12
  },
  {
    product_name: "G.Skill Trident Z RGB 32GB",
    category_name: "RAM - Bộ nhớ",
    price: 2990000,
    stock: 10
  },

  // VGA
  {
    product_name: "ASUS GTX 1650 4GB",
    category_name: "VGA - Card màn hình",
    price: 3290000,
    stock: 8
  },
  {
    product_name: "MSI RTX 3050 8GB",
    category_name: "VGA - Card màn hình",
    price: 4990000,
    stock: 10
  },
  {
    product_name: "Gigabyte RTX 3060 12GB",
    category_name: "VGA - Card màn hình",
    price: 6990000,
    stock: 7
  },
  {
    product_name: "ASUS Dual RTX 4060 8GB",
    category_name: "VGA - Card màn hình",
    price: 8290000,
    stock: 9
  },
  {
    product_name: "MSI RTX 4060 Ti 8GB",
    category_name: "VGA - Card màn hình",
    price: 10990000,
    stock: 5
  },
  {
    product_name: "Gigabyte RTX 4070 12GB",
    category_name: "VGA - Card màn hình",
    price: 15990000,
    stock: 4
  },

  // Ổ cứng
  {
    product_name: "Kingston NV2 500GB NVMe",
    category_name: "Ổ cứng - Lưu trữ",
    price: 890000,
    stock: 25
  },
  {
    product_name: "Kingston NV2 1TB NVMe",
    category_name: "Ổ cứng - Lưu trữ",
    price: 1490000,
    stock: 20
  },
  {
    product_name: "Samsung 980 500GB NVMe",
    category_name: "Ổ cứng - Lưu trữ",
    price: 1290000,
    stock: 15
  },
  {
    product_name: "Samsung 990 PRO 1TB",
    category_name: "Ổ cứng - Lưu trữ",
    price: 2990000,
    stock: 10
  },
  {
    product_name: "WD Blue 1TB HDD",
    category_name: "Ổ cứng - Lưu trữ",
    price: 1190000,
    stock: 18
  },
  {
    product_name: "Seagate Barracuda 2TB HDD",
    category_name: "Ổ cứng - Lưu trữ",
    price: 1690000,
    stock: 12
  }
];

// Trạng thái của 10 đơn hàng
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

const adminEmail = "admin@gmail.com";

const customerEmails = Array.from(
  { length: 10 },
  (_, index) => `customer${index + 1}@gmail.com`
);

const customerPhones = Array.from(
  { length: 10 },
  (_, index) => `090000000${index + 1}`
);

// Hàm lấy dữ liệu theo danh sách giá trị
async function selectByIn(
  sequelize,
  table,
  column,
  values,
  transaction
) {
  if (values.length === 0) {
    return [];
  }

  const placeholders = values.map(() => "?").join(", ");

  return sequelize.query(
    `SELECT * FROM ${table} WHERE ${column} IN (${placeholders})`,
    {
      replacements: values,
      type: QueryTypes.SELECT,
      transaction
    }
  );
}

module.exports = {
  // Thêm dữ liệu mẫu
  async up(queryInterface) {
    const transaction =
      await queryInterface.sequelize.transaction();

    try {
      // Mã hóa mật khẩu
      const hashedPassword = await bcrypt.hash("123456", 10);

      // 1. Thêm 5 danh mục
      await queryInterface.bulkInsert(
        "categories",
        categories,
        { transaction }
      );

      // Lấy ID danh mục
      const categoryRows = await selectByIn(
        queryInterface.sequelize,
        "categories",
        "category_name",
        categories.map(item => item.category_name),
        transaction
      );

      const categoryMap = {};

      categoryRows.forEach(category => {
        categoryMap[category.category_name] =
          category.category_id;
      });

      // 2. Thêm 30 linh kiện
      const productData = products.map(product => ({
        category_id: categoryMap[product.category_name],
        product_name: product.product_name,
        description: `Sản phẩm ${product.product_name}`,
        price: product.price,
        stock: product.stock,
        image: null
      }));

      await queryInterface.bulkInsert(
        "products",
        productData,
        { transaction }
      );

      // Lấy ID sản phẩm
      const productRows = await selectByIn(
        queryInterface.sequelize,
        "products",
        "product_name",
        products.map(item => item.product_name),
        transaction
      );

      const productMap = {};

      productRows.forEach(product => {
        productMap[product.product_name] =
          product.product_id;
      });

      // 3. Thêm 1 admin và 10 khách hàng
      const userData = [
        {
          name: "Quản trị viên",
          email: adminEmail,
          password: hashedPassword,
          phone: "0900000000",
          role: "admin"
        },

        ...customerEmails.map((email, index) => ({
          name: `Khách hàng ${index + 1}`,
          email,
          password: hashedPassword,
          phone: customerPhones[index],
          role: "customer"
        }))
      ];

      await queryInterface.bulkInsert(
        "Users",
        userData,
        { transaction }
      );

      // Lấy ID tài khoản
      const userRows = await selectByIn(
        queryInterface.sequelize,
        "Users",
        "email",
        [adminEmail, ...customerEmails],
        transaction
      );

      const userMap = {};

      userRows.forEach(user => {
        userMap[user.email] = user.user_id;
      });

      // 4. Thêm 10 đơn hàng
      const orderData = customerEmails.map((email, index) => {
        const product1 = products[index];
        const product2 = products[index + 10];

        const totalAmount =
          product1.price + product2.price;

        return {
          user_id: userMap[email],
          total_amount: totalAmount,
          shipping_address:
            `Địa chỉ khách hàng ${index + 1}, TP. Hồ Chí Minh`,
          phone: customerPhones[index],
          status: orderStatuses[index]
        };
      });

      await queryInterface.bulkInsert(
        "orders",
        orderData,
        { transaction }
      );

      // Lấy ID đơn hàng
      const customerIds = customerEmails.map(
        email => userMap[email]
      );

      const orderRows = await selectByIn(
        queryInterface.sequelize,
        "orders",
        "user_id",
        customerIds,
        transaction
      );

      const orderMap = {};

      orderRows.forEach(order => {
        orderMap[order.user_id] = order.order_id;
      });

      // 5. Thêm 20 chi tiết đơn hàng
      const orderItemData = [];

      customerEmails.forEach((email, index) => {
        const userId = userMap[email];
        const orderId = orderMap[userId];

        const product1 = products[index];
        const product2 = products[index + 10];

        orderItemData.push(
          {
            order_id: orderId,
            product_id: productMap[product1.product_name],
            quantity: 1
          },
          {
            order_id: orderId,
            product_id: productMap[product2.product_name],
            quantity: 1
          }
        );
      });

      await queryInterface.bulkInsert(
        "order_items",
        orderItemData,
        { transaction }
      );

      await transaction.commit();

      console.log("Seed cửa hàng linh kiện máy tính thành công!");
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  // Xóa dữ liệu mẫu
  async down(queryInterface) {
    const transaction =
      await queryInterface.sequelize.transaction();

    try {
      // Lấy tài khoản mẫu
      const userRows = await selectByIn(
        queryInterface.sequelize,
        "Users",
        "email",
        [adminEmail, ...customerEmails],
        transaction
      );

      const userIds = userRows.map(user => user.user_id);

      // Xóa đơn hàng và chi tiết đơn hàng của khách mẫu
      if (userIds.length > 0) {
        const orderRows = await selectByIn(
          queryInterface.sequelize,
          "orders",
          "user_id",
          userIds,
          transaction
        );

        const orderIds = orderRows.map(
          order => order.order_id
        );

        if (orderIds.length > 0) {
          await queryInterface.bulkDelete(
            "order_items",
            { order_id: orderIds },
            { transaction }
          );
        }

        await queryInterface.bulkDelete(
          "orders",
          { user_id: userIds },
          { transaction }
        );

        await queryInterface.bulkDelete(
          "cart_items",
          { user_id: userIds },
          { transaction }
        );
      }

      // Xóa tài khoản mẫu
      await queryInterface.bulkDelete(
        "Users",
        { email: [adminEmail, ...customerEmails] },
        { transaction }
      );

      // Xóa sản phẩm mẫu
      await queryInterface.bulkDelete(
        "products",
        {
          product_name: products.map(
            product => product.product_name
          )
        },
        { transaction }
      );

      // Xóa danh mục mẫu
      await queryInterface.bulkDelete(
        "categories",
        {
          category_name: categories.map(
            category => category.category_name
          )
        },
        { transaction }
      );

      await transaction.commit();

      console.log("Đã xóa dữ liệu mẫu thành công!");
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};

phàn migration


"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    // ===================================
    // 1. BẢNG Users
    // ===================================
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
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.STRING(225),
        allowNull: false
      },

      phone: {
        type: Sequelize.STRING(225),
        allowNull: true
      },

      role: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: "customer"
      }
    });

    // ===================================
    // 2. BẢNG categories
    // ===================================
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

    // ===================================
    // 3. BẢNG products
    // ===================================
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

    // ===================================
    // 4. BẢNG cart_items
    // ===================================
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

    // ===================================
    // 5. BẢNG orders
    // ===================================
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
        allowNull: false,
        defaultValue: "pending"
      }
    });

    // ===================================
    // 6. BẢNG order_items
    // ===================================
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
        allowNull: false,
        defaultValue: 1
      }
    });

  },

  // ===================================
  // HOÀN TÁC MIGRATION
  // ===================================
  async down(queryInterface) {

    // Xóa theo thứ tự ngược để tránh lỗi khóa ngoại
    await queryInterface.dropTable("order_items");

    await queryInterface.dropTable("orders");

    await queryInterface.dropTable("cart_items");

    await queryInterface.dropTable("products");

    await queryInterface.dropTable("categories");

    await queryInterface.dropTable("Users");

  }
};