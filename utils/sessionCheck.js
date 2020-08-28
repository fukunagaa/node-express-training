module.exports = function sessionCheck(req, res, next) {
  if (req.session.name == undefined || req.session.name == null) {
    return res.status(401).json({
      message: "Not session authenticated",
    });
  } else {
    next();
  }
};
