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

class ProductsController {
  async store(req, res) { /* criar */
    /* Validaçao do schema com Yup : */
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
    });

    /* se estiver fora do padrao passa por aqui */
    try {
      schema.validateSync(req.body, { abortEarley: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name, price, category_id, offer } = req.body;
    const { filename } = req.file;

    const newProduct = await Products.create({
      name,
      price,
      category_id,
      path: filename,
      offer,
    });

    return res.status(201).json(newProduct);
  }

  async index(req, res) { /* listar */
    /* trazer a relaçao com a category quando os produtos forem buscados */
    const products = await Products.findAll({
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name'],
      },
    });

    return res.status(200).json(products);
  }

  async update(req, res) { /* atualizar */
    /* Validaçao do schema com Yup : */
    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
    });

    /* se estiver fora do padrao passa por aqui */
    try {
      schema.validateSync(req.body, { abortEarley: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name, price, category_id, offer } = req.body;
    const { id } = req.params;

    let path;
    if (req.file) { /* definindo oque vai ser o filename */
      const { filename } = req.file;
      path = filename;
    }

    await Products.update(
      {
        name,
        price,
        category_id,
        path,
        offer,
      },
      {
        where: { /* buscar por um id */
          id,
        },
      },
    );

    return res.status(200).json();
  }
}

export default new ProductsController();
