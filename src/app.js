const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/swaggerConfig');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

// Middleware
// app.use(cors());
app.use(
  cors({
    origin: [
      'http://localhost:5000', 
      'https://quail-farm-sigma.vercel.app', 
      'https://quail-farm-gstz20q6w-leduytuanvus-projects.vercel.app',
    ],
  })
);
app.use(express.json());
app.use(morgan('dev'));

// Explicitly handle `/api-docs`
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

// Define other routes
app.use('/api', routes);

// Catch-all error middleware
app.use(errorMiddleware);

module.exports = app;
