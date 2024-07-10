import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './ormconfig';
import authRoutes from './routes/auth';
import expenseRoutes from './routes/expense';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Expense Tracker API',
      version: '1.0.0',
      description: 'API documentation for Expense Tracker',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local server',
      },
    ],
    components: {
      schemas: {
        Expense: {
          type: 'object',
          required: ['date', 'amount', 'category', 'description'],
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            date: {
              type: 'string',
              format: 'date',
              example: '2023-07-01',
            },
            amount: {
              type: 'number',
              example: 50,
            },
            category: {
              type: 'string',
              example: 'Food',
            },
            description: {
              type: 'string',
              example: 'Lunch',
            },
            userId: {
              type: 'integer',
              example: 1,
            },
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/entities/*.ts'],
  security: [{
    bearerAuth: [],
  }],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api', expenseRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export default app;