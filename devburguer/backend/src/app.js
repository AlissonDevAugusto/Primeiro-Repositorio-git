import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';

const app = express(); /* configuraçoes do express */

app.use(cors()); /* permissao de qual front pode ter acesso ao nosso servidor */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);

app.use(routes);

export default app;
