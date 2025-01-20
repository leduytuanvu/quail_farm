require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./config/db');

// Kết nối cơ sở dữ liệu
connectDB();

// Khởi chạy server, comment khi chạy vercel dev
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on:\nhttp://localhost:${PORT}/api-docs\nhttps://quail-farm-sigma.vercel.app/api-docs\nhttps://quail-farm-hihgzn935-leduytuanvus-projects.vercel.app/api-docs`);
});

module.exports = app;