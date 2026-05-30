import express from 'express';
import { createUser, addToWhitelist, addToBlacklist, getLists } from '../controllers/userController.js';

const routes = express.Router();

/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Crea un nuevo usuario
 *      tags:
 *          - Users
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Juan Carlos
 *      responses:
 *          201:
 *              description: Usuario creado exitosamente
 */

routes.post('/', createUser);
routes.post('/whitelist', addToWhitelist);
routes.post('/blacklist', addToBlacklist);
routes.get('/lists', getLists);

export default routes;