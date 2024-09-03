const roleBaseAuth = (role) => {
  return (req, res, next) => {
    if (!req.user.roles.includes(role)) {
      return res.status(403).send("Access Denied.");
    }

    next();
  };
};

export default roleBaseAuth;
