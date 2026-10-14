/* Metodos MVC :
 store -> criar dados
 index -> lista todos os dados
 show -> lista um dados
 update -> atualiza dados
 delete -> apaga dados
 */

import * as Yup from 'yup';
import Products from '../models/Products.js';
import Category from '../models/Category.js';
import Order from '../schemas/Order.js';

class OrderController {
  async store(req, res) {
    /* criar o pedido */
    const schema = Yup.object({
      /* validaçao com yup */
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          }),
        ),
    });

    try {
      /* passa por aqui , se estive algum erro no schema */
      schema.validateSync(req.body, { abortEarly: false, strict: true });
    } catch (err) {
      /* caso tenha, lide assim:  */
      return res.status(400).json({ error: err.errors });
    }

    const { userId, userName } = req;
    const { products } = req.body;

    const productsIds = products.map(
      (product) => product.id,
    ); /* mapear os id */

    const findedProducts = await Products.findAll({
      /* buscar os dados do produto pela model no banco */
      where: {
        id: productsIds,
      },
      include: {
        /* relaçao */
        model: Category,
        as: 'category',
        attributes: ['name'],
      },
    });

    const mapedProducts = findedProducts.map((product) => {
      /* mapeando para buscar apenas os dados desejados */
      const quantity = products.find(
        (arrayP) => arrayP.id === product.id,
      ).quantity;

      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        url: product.url,
        category: product.category.name,
        quantity,
      };

      return newProduct;
    });

    const order = {
      /* dados final para o pedido */
      user: {
        id: userId,
        name: userName,
      },
      products: mapedProducts,
      status: 'Pedido Realizado',
    };

    const newOrder = await Order.create(order);

    return res.status(201).json(newOrder);
  }

  async update(req, res) {
    /* atualizar pedidos */
    /* validaçao com yup */
    const schema = Yup.object({
      status: Yup.string().required(),
    });

    try {
      /* passa por aqui , se estive algum erro no schema */
      schema.validateSync(req.body, { abortEarly: false, strict: true });
    } catch (err) {
      /* caso tenha, lide assim:  */
      return res.status(400).json({ error: err.errors });
    }

    const { status } = req.body;
    const { id } = req.params;

    try {
      /* proteger codigo , atualizar atraves de um id que vem dos status */
      await Order.updateOne({ _id: id }, { status });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(200).json({ message: 'Status updated successfully' });
  }

  async index(req, res) {
    /* buscar os pedidos */
    const orders = await Order.find();

    return res.status(200).json(orders);
  }
}

export default new OrderController();
