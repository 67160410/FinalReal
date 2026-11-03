# โปรเจกต์ข้อสอบปลายภาค 88736065

## ขั้นตอนเตรียมเครื่อง

1. คัดลอก `.env.example` เป็น `.env` (ใน Windows ใช้คำสั่ง `copy .env.example .env`) แล้ววาง token ด้านล่างลงในบรรทัด `CUSTOMER_TOKEN=`
2. เปิดฐานข้อมูล: `docker compose up -d` การเปิดครั้งแรกอาจใช้เวลานานเพราะต้องดึง image ของ MySQL
3. ติดตั้ง dependency และใส่ข้อมูลตัวอย่าง: `npm install` แล้ว `npm run seed`
4. ทดสอบการทำงาน: `npm test` (อาจมีเทสต์ที่ไม่ผ่าน)

## Token ทดสอบ (role customer, อายุ 60 วัน)

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzkyOTgyODEzLCJleHAiOjE3OTgxNjY4MTN9.YaWIizckwn5vO35U43_hw-IT_jOjCNPOu7onpmfhjao
```

## หมายเหตุ

- ไม่ต้องติดตั้ง dotenv โปรเจกต์อ่านค่าจากไฟล์ `.env` ให้อัตโนมัติผ่าน `config.js`
- API ทั้งหมดอยู่ที่ `/api/v1`
- ถ้าต้องการรีเซ็ตข้อมูล ให้รัน `npm run seed` ใหม่
- ถ้า `npm run seed` ไม่ผ่านตอนฐานข้อมูลเพิ่งเปิด ให้รอสักครู่แล้วรันใหม่
- endpoint `POST /api/v1/orders` มีการจำกัดจำนวนคำขอ ดังนั้นการรันเทสต์ที่ยิงคำขอซ้ำ ๆ ในระยะสั้นอาจได้ผลตอบกลับไม่คาดคิด
