"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Users
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

    // 2. Categories
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

    // 3. Products
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

    // 4. Cart items
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

    // 5. Orders
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

    // 6. Order items
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
      const { Op } = Sequelize;

    // 7. Bổ sung cột còn thiếu cho order_items
    await queryInterface.addColumn("order_items", "price", {
      type: Sequelize.DECIMAL(12, 2),
      allowNull: false
    });

    await queryInterface.addColumn("order_items", "subtotal", {
      type: Sequelize.DECIMAL(12, 2),
      allowNull: false
    });

    // 8. CHECK constraints
    await queryInterface.addConstraint("products", {
      fields: ["price"],
      type: "check",
      where: { price: { [Op.gte]: 0 } },
      name: "chk_products_price"
    });

    await queryInterface.addConstraint("products", {
      fields: ["stock"],
      type: "check",
      where: { stock: { [Op.gte]: 0 } },
      name: "chk_products_stock"
    });

    await queryInterface.addConstraint("cart_items", {
      fields: ["quantity"],
      type: "check",
      where: { quantity: { [Op.gt]: 0 } },
      name: "chk_cart_items_quantity"
    });

    await queryInterface.addConstraint("order_items", {
      fields: ["quantity"],
      type: "check",
      where: { quantity: { [Op.gt]: 0 } },
      name: "chk_order_items_quantity"
    });

    await queryInterface.addConstraint("order_items", {
      fields: ["price"],
      type: "check",
      where: { price: { [Op.gte]: 0 } },
      name: "chk_order_items_price"
    });

    // 9. Index
    await queryInterface.addIndex("products", ["product_name"], {
      name: "idx_products_product_name"
    });

    await queryInterface.addIndex("products", ["category_id"], {
      name: "idx_products_category_id"
    });

    await queryInterface.addIndex("orders", ["user_id", "status"], {
      name: "idx_orders_user_id_status"
    });
  },
  
  async down(queryInterface) {
    // Drop in reverse dependency order to satisfy foreign keys.
    await queryInterface.dropTable("order_items");
    await queryInterface.dropTable("orders");
    await queryInterface.dropTable("cart_items");
    await queryInterface.dropTable("products");
    await queryInterface.dropTable("categories");
    await queryInterface.dropTable("Users");
  }
};
