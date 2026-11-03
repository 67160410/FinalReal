// แยก app ออกจาก server.js เพื่อให้ Supertest เรียกใช้ได้โดยไม่ต้อง listen พอร์ต
const express = require("express");
const ordersRouter = require("./routes/orders");
const menuItemsRouter = require("./routes/menu-items");

const app = express();
app.use(express.json());

app.use("/api/v1", ordersRouter);
app.use("/api/v1", menuItemsRouter);

// error handler กลาง
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" });
});

module.exports = app;
