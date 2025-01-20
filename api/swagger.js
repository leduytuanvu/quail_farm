const swaggerSpec = require('../config/swaggerConfig');

export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(swaggerSpec);
}
