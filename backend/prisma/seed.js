require("dotenv").config();
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const categories = [
  { category_name: "CPU - Bộ vi xử lý", description: "Các loại bộ vi xử lý máy tính" },
  { category_name: "Mainboard - Bo mạch chủ", description: "Các loại bo mạch chủ máy tính" },
  { category_name: "RAM - Bộ nhớ", description: "Các loại bộ nhớ RAM" },
  { category_name: "VGA - Card màn hình", description: "Các loại card đồ họa" },
  { category_name: "Ổ cứng - Lưu trữ", description: "Các loại ổ cứng SSD và HDD" }
];

const products = [
  { product_name: "Intel Core i3-12100F", category_name: "CPU - Bộ vi xử lý", price: 1890000, stock: 20 },
  { product_name: "Intel Core i5-12400F", category_name: "CPU - Bộ vi xử lý", price: 2990000, stock: 15 },
  { product_name: "Intel Core i5-13400F", category_name: "CPU - Bộ vi xử lý", price: 4290000, stock: 12 },
  { product_name: "Intel Core i7-13700K", category_name: "CPU - Bộ vi xử lý", price: 8990000, stock: 8 },
  { product_name: "AMD Ryzen 5 5600", category_name: "CPU - Bộ vi xử lý", price: 2490000, stock: 18 },
  { product_name: "AMD Ryzen 7 5700X", category_name: "CPU - Bộ vi xử lý", price: 3990000, stock: 10 },
  { product_name: "ASUS PRIME H610M-K", category_name: "Mainboard - Bo mạch chủ", price: 1790000, stock: 15 },
  { product_name: "MSI PRO B760M-E", category_name: "Mainboard - Bo mạch chủ", price: 2390000, stock: 12 },
  { product_name: "Gigabyte B760M DS3H", category_name: "Mainboard - Bo mạch chủ", price: 2990000, stock: 10 },
  { product_name: "ASUS TUF GAMING B550M-PLUS", category_name: "Mainboard - Bo mạch chủ", price: 3290000, stock: 8 },
  { product_name: "MSI MAG B650 TOMAHAWK", category_name: "Mainboard - Bo mạch chủ", price: 5690000, stock: 6 },
  { product_name: "Gigabyte A520M S2H", category_name: "Mainboard - Bo mạch chủ", price: 1490000, stock: 14 },
  { product_name: "Kingston Fury Beast 8GB DDR4", category_name: "RAM - Bộ nhớ", price: 490000, stock: 30 },
  { product_name: "Kingston Fury Beast 16GB DDR4", category_name: "RAM - Bộ nhớ", price: 890000, stock: 25 },
  { product_name: "Corsair Vengeance 16GB DDR4", category_name: "RAM - Bộ nhớ", price: 990000, stock: 20 },
  { product_name: "Kingston Fury Beast 16GB DDR5", category_name: "RAM - Bộ nhớ", price: 1390000, stock: 18 },
  { product_name: "Corsair Vengeance 32GB DDR5", category_name: "RAM - Bộ nhớ", price: 2590000, stock: 12 },
  { product_name: "G.Skill Trident Z RGB 32GB", category_name: "RAM - Bộ nhớ", price: 2990000, stock: 10 },
  { product_name: "ASUS GTX 1650 4GB", category_name: "VGA - Card màn hình", price: 3290000, stock: 8 },
  { product_name: "MSI RTX 3050 8GB", category_name: "VGA - Card màn hình", price: 4990000, stock: 10 },
  { product_name: "Gigabyte RTX 3060 12GB", category_name: "VGA - Card màn hình", price: 6990000, stock: 7 },
  { product_name: "ASUS Dual RTX 4060 8GB", category_name: "VGA - Card màn hình", price: 8290000, stock: 9 },
  { product_name: "MSI RTX 4060 Ti 8GB", category_name: "VGA - Card màn hình", price: 10990000, stock: 5 },
  { product_name: "Gigabyte RTX 4070 12GB", category_name: "VGA - Card màn hình", price: 15990000, stock: 4 },
  { product_name: "Kingston NV2 500GB NVMe", category_name: "Ổ cứng - Lưu trữ", price: 890000, stock: 25 },
  { product_name: "Kingston NV2 1TB NVMe", category_name: "Ổ cứng - Lưu trữ", price: 1490000, stock: 20 },
  { product_name: "Samsung 980 500GB NVMe", category_name: "Ổ cứng - Lưu trữ", price: 1290000, stock: 15 },
  { product_name: "Samsung 990 PRO 1TB", category_name: "Ổ cứng - Lưu trữ", price: 2990000, stock: 10 },
  { product_name: "WD Blue 1TB HDD", category_name: "Ổ cứng - Lưu trữ", price: 1190000, stock: 18 },
  { product_name: "Seagate Barracuda 2TB HDD", category_name: "Ổ cứng - Lưu trữ", price: 1690000, stock: 12 }
];

const orderStatuses = [
  "pending", "confirmed", "shipping", "completed", "cancelled",
  "pending", "confirmed", "shipping", "completed", "completed"
];

async function main() {
  const existingCategories = await prisma.categories.count();
  if (existingCategories > 0) {
    console.log("Dữ liệu mẫu đã tồn tại, bỏ qua bước nạp lại.");
    return;
  }

  const hashedPassword = await bcrypt.hash("123456", 10);

  // 1. Tạo 5 danh mục
  const categoryMap = {};
  for (const cat of categories) {
    const created = await prisma.categories.create({ data: cat });
    categoryMap[created.category_name] = created.category_id;
  }

  // 2. Tạo 30 sản phẩm
  const createdProducts = [];
  for (const prod of products) {
    const created = await prisma.products.create({
      data: {
        category_id: categoryMap[prod.category_name],
        product_name: prod.product_name,
        description: `Sản phẩm ${prod.product_name}`,
        price: prod.price,
        stock: prod.stock,
        image: null
      }
    });
    createdProducts.push({ ...created, rawPrice: prod.price });
  }

  // 3. Tạo 1 admin và 10 khách hàng (mật khẩu chung: 123456)
  await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      name: "Quản trị viên",
      email: "admin@gmail.com",
      password: hashedPassword,
      phone: "0900000000",
      role: "admin"
    }
  });

  const customers = [];
  for (let i = 0; i < 10; i++) {
    const email = `customer${i + 1}@gmail.com`;
    const phone = `090000000${i + 1}`;
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        name: `Khách hàng ${i + 1}`,
        email,
        password: hashedPassword,
        phone,
        role: "customer"
      }
    });
    customers.push({ user, phone });
  }

  // 4. Tạo 10 đơn hàng và 20 chi tiết đơn hàng
  for (let i = 0; i < 10; i++) {
    const { user, phone } = customers[i];
    const p1 = createdProducts[i];
    const p2 = createdProducts[i + 10];

    const order = await prisma.orders.create({
      data: {
        user_id: user.user_id,
        total_amount: p1.rawPrice + p2.rawPrice,
        shipping_address: `Địa chỉ khách hàng ${i + 1}, TP. Hồ Chí Minh`,
        phone,
        status: orderStatuses[i]
      }
    });

    await prisma.order_items.createMany({
      data: [
        { order_id: order.order_id, product_id: p1.product_id, quantity: 1, price: p1.rawPrice, subtotal: p1.rawPrice },
        { order_id: order.order_id, product_id: p2.product_id, quantity: 1, price: p2.rawPrice, subtotal: p2.rawPrice }
      ]
    });
  }

  console.log("Nạp dữ liệu mẫu cửa hàng linh kiện máy tính thành công!");
}

main()
  .catch((e) => {
    console.error("Lỗi khi nạp dữ liệu:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });