const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Quail Farm API',
            version: '1.0.0',
            description: 'API documentation for the Quail Farm project',
        },
        servers: [
            {
                url: 'http://localhost:5000/api',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/routes/*.js', './src/models/*.js'], // Path to API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
