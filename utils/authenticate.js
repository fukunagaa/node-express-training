const jwt = require("jsonwebtoken");
const config = require("./config");

module.exports = {
  jwtCheck: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const secret = config.jwt.secret;
      const decoded = jwt.verify(token, secret);
      console.log("decode " + decoded);
      req.jwtPayload = decoded;
      next();
    } catch (err) {
      return res.status(401).json({
        message: "Not jwt authenticated",
      });
    }
  },
  sessionCheck: (req, res, next) => {
    if (req.session.name == undefined || req.session.name == null) {
      return res.status(401).json({
        message: "Not session authenticated",
      });
    } else {
      next();
    }
  },
};
