require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./config/db');

// Kết nối cơ sở dữ liệu
connectDB();

// Khởi chạy server
const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}/api-docs and on https://quail-farm-sigma.vercel.app/api-docs`);
// });

module.exports = app;
