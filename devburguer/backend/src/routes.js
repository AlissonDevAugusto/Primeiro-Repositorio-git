/* Metodos HTTP :
 GET -> buscar
 POST -> criar
 PUT -> atualizar mais de um dados
 PUTCH -> atualiza somente um  */

import { Router } from 'express'; /* rotas do projeto */
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductsController from './app/controllers/ProductsController.js';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';

import CreatePaymentIntentController from './app/controllers/stripe/CreatePaymentIntentController.js';
import VerifyPaymentController from './app/controllers/stripe/VerifyPaymentController.js';

import multer from 'multer';
import multerConfig from './config/multer.cjs';
import authMiddleware from './app/middlewares/auth.js';
import adminMiddleware from './app/middlewares/admin.js';

const routes = new Router();
const upload = multer(multerConfig);
                            
/* rotas do login e cadastro */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); /* sera chamado por todas as rotas abaixo */

 /* rotas de produtos */
routes.post('/products', adminMiddleware, upload.single('file'), ProductsController.store); /* criar */
routes.put('/products/:id', adminMiddleware, upload.single('file'), ProductsController.update); /* atualizar */
routes.get('/products', ProductsController.index); /* buscar */

/* rotas das categorias */
routes.post('/categories', adminMiddleware, upload.single('file'), CategoryController.store); /* criar */
routes.put('/categories/:id', adminMiddleware, upload.single('file'), CategoryController.update); /* atualizar */
routes.get('/categories', CategoryController.index); /* buscar */

/* rotas dos pedidos */
routes.post('/orders', OrderController.store); /* criar */
routes.put('/orders/:id', adminMiddleware, OrderController.update); /* atualizar */
routes.get('/orders', OrderController.index); /* buscar */

routes.post('/create-payment-intent', CreatePaymentIntentController.store);
routes.get('/verify-payment', VerifyPaymentController.verify);

export default routes;
