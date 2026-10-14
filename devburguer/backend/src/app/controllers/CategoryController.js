/* Metodos MVC :
 store -> criar dados
 index -> lista todos os dados
 show -> lista um dados
 update -> atualiza dados
 delete -> apaga dados
 */

import * as Yup from 'yup';
import Category from '../models/Category.js';

class CategoryController {
  async store(req, res) {
    /* criar */
    /* Validaçao do schema com Yup : */
    const schema = Yup.object({
      name: Yup.string().required(),
    });

    /* se estiver fora do padrao passa por aqui */
    try {
      schema.validateSync(req.body, { abortEarly: true });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name } = req.body;
    const { filename } = req.file;

    /* validaçao para ter categorias repitidas : */
    const existingCategory = await Category.findOne({
      where: { name },
    });

    if (existingCategory) {
      return res.status(400).json({ error: 'existing alread category' });
    }

    /* criando a categoria :  */
    const newCategory = await Category.create({
      name,
      path: filename,
    });

    return res.status(201).json(newCategory);
  }

  async update(req, res) {
    /* atualizar */
    /* Validaçao do schema com Yup : */
    const schema = Yup.object({
      name: Yup.string(),
    });

    /* se estiver fora do padrao passa por aqui */
    try {
      schema.validateSync(req.body, { abortEarly: true });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name } = req.body;
    const { id } = req.params;

    let path;
    if (req.file) { /* defini oque vai ser o filename */
      const { filename } = req.file;
      path = filename;
    }

    /* validaçao para caso tenha categorias repitidas : */
    
      const existingCategory = await Category.findOne({
        where: {
          name,
        },
      });

      if (existingCategory) {
        return res.status(400).json({ error: 'existing alread category' });
      }
    
    /* atualizando a categoria :  */
    await Category.update(
      {
        name,
        path,
      },
      {
        where: {
          id,
        },
      },
    );

    return res.status(201).json({message: 'category updated'});
  }

  async index(_req, res) {
    /* listar */
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  }
}

export default new CategoryController();
