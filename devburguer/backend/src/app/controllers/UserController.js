/* Metodos MVC :
 store -> criar dados
 index -> lista todos os dados
 show -> lista um dados
 update -> atualiza dados
 delete -> apaga dados
 */

import User from '../models/User.js';
import { v4 } from 'uuid';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';

class UserController {
  async store(req, res) { /* criar */
    /* Validaçao do schema com yup :*/
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    });

    try {
      /* se estiver fora do padrao passa por aqui */
      schema.validateSync(req.body, { abortEarly: false, strict: true });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const { name, email, password, admin } = req.body;

    /* Validaçao de email duplicados : */
    const existingUsers = await User.findOne({
      where: { email },
    });

    if (existingUsers) {
      return res.status(400).json({ message: 'Email already taken' });
    }

    /* Criptografando a senha */
    const password_hash = await bcrypt.hash(password, 10);

    /* Criar user : */
    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });

    /* responder : */
    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
    });
  }
}

export default new UserController();
