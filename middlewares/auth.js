// ตรวจ JWT — แนบ req.user = { id, role } ไว้ให้ route ถัดไป
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

function authenticateToken(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) {
    return res.status(401).json({ message: "ไม่พบ token" });
  }
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = { id: payload.id, role: payload.role };
    next();
  } catch (err) {
    return res.status(401).json({ message: "token ไม่ถูกต้องหรือหมดอายุ" });
  }
}

module.exports = { authenticateToken };
