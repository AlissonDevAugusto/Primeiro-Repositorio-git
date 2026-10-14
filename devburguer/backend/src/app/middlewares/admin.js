
const adminMiddleware = (req, res, next) => { /* validaçao admin dos usuarios */
  const isUserAdmin = req.userIsAdmin

  if (!isUserAdmin) {
    return res.status(401).json();
  }

  return next();
};

export default adminMiddleware;