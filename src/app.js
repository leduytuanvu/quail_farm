const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/swaggerConfig'); // Import Swagger configuration

const app = express();

// Middleware cơ bản
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Định nghĩa các routes
app.use('/api', routes);

// Middleware xử lý lỗi
app.use(errorMiddleware);

module.exports = app;
