// จุดเริ่มต้นเซิร์ฟเวอร์ (npm start)
const app = require("./app");
const { port } = require("./config");

app.listen(port, () => {
  console.log(`exam server listening on http://localhost:${port}`);
});
