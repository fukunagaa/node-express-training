const jwt = require("jsonwebtoken");

module.exports = function authenticate(req, res, next) {
  try {
    const token = req.headers.authorization;
    const secret = "secret_key_goes_here";
    const decoded = jwt.verify(token, secret);
    console.log("decode " + decoded);
    req.jwtPayload = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Not authenticated",
    });
  }
};
