/* Metodos MVC :
 store -> criar dados
 index -> lista todos os dados
 show -> lista um dados
 update -> atualiza dados
 delete -> apaga dados
 */

import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

class SessionController {
  async store(req, res) {
    /* criar */
    /* Validaçao do schema com yup : */
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(req.body, {
      abortEarly: false,
      strict: true,
    });

    /* resposta para as validaçoes incorreta */
    const EmailOrPasswordIncorrect = () => {
      return res.status(400).json({ error: 'Email or Password incorrect' });
    };

    /* prosseguindo do schema ainda : */
    if (!isValid) {
      EmailOrPasswordIncorrect();
    }

    /* Validar se o user ja existe : */
    const { email, password } = req.body;

    const existingUsers = await User.findOne({
      where: { email },
    });

    if (!existingUsers) {
      EmailOrPasswordIncorrect();
    }

    /* Validar senha */
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUsers.password_hash,
    );

    if (!isPasswordCorrect) {
      EmailOrPasswordIncorrect();
    }

    const token = jwt.sign(
      {
        id: existingUsers.id,
        admin: existingUsers.admin,
        name: existingUsers.name,
      },
      authConfig.secret,
      {
        expiresIn: authConfig.expiresIn,
      },
    );

    /* retornar no json : */
    return res.status(200).json({
      id: existingUsers.id,
      name: existingUsers.name,
      email: existingUsers.email,
      admin: existingUsers.admin,
      token,
    });
  }
}

export default new SessionController();
