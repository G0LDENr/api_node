import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

import connectDB from './config/db.js';
import userRoutes from './routes/user.js';

const app = express();

app.use('/api/docs', 
  swaggerUi.serve, 
  swaggerUi.setup(swaggerSpec)
);

dotenv.config();
connectDB();
app.use(express.json());

//Rutas
app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor escuchando desde el puerto ${PORT}`);
});