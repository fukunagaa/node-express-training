const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticate = require("../utils/authenticate");
const config = require("../utils/config");
const constant = require("../utils/constant");

/* database化 */
const account = {
  email: "admin@example.com",
  name: "admin",
  password: "admin",
};

router.post("/", function (req, res, next) {
  // session
  if (account.password === req.body.password) {
    req.session.name = account.name;
    req.session.cookie.maxAge = config.session.maxAge;
  }
  console.log(req.session);
  console.log(req.session.name);

  // jsonwebtoken
  const payload = {
    email: req.body.email,
  };
  const secret = config.jwt.secret;
  const options = config.jwt.options;
  const token = jwt.sign(payload, secret, options);
  const body = {
    email: req.body.email,
    token: token,
  };
  console.log(token);
  res.status(constant.httpStatus.SUCCESS).json(body);
});

router.post("/kakunin", authenticate.sessionCheck, authenticate.jwtCheck, function (req, res, next) {
  // session
  console.log(req.session);
  console.log(req.session.name);

  // jsonwebtoken
  console.log(req.jwtPayload.email);
  res.status(constant.httpStatus.SUCCESS).json({
    message: "Hello!",
    authEmail: req.jwtPayload.email,
  });
});

module.exports = router;
