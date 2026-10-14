import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

const authMiddleware = (req, res, next) => {
  /* validaçao token jwt */
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: 'token not provided' });
  }

  const token = authToken.split(' ')[1];

  try {
    jwt.verify(token, authConfig.secret, (error, decoded) => {
      if (error) {
        throw Error();
      }

      req.userId = decoded.id;
      req.userName = decoded.name;
      req.userIsAdmin = decoded.admin;
    });
  } catch (_error) {
    return res.status(401).json({ error: 'token is invalid' });
  }
  return next();
};

export default authMiddleware;
