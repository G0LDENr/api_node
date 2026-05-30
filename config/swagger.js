import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition : {
        openapi: '3.0.0',
        info: {
            title: 'API node.js',
            version: '1.0.0',
            description: 'Api con express'
        },
        servers: [
            {
                url: 'http://localhost:9000',
            }
        ]
    },
    apis: ['./routes/*.js']
};
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;