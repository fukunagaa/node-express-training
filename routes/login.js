const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticate = require("../utils/authenticate");

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
    const hour = 1800000;
    req.session.cookie.maxAge = hour;
  }
  console.log(req.session);
  console.log(req.session.name);

  // jsonwebtoken
  const payload = {
    email: req.body.email,
  };
  const secret = "secret_key_goes_here";
  const options = {
    algorithm: "HS256",
    expiresIn: "10m",
  };
  const token = jwt.sign(payload, secret, options);
  const body = {
    email: req.body.email,
    token: token,
  };
  console.log(token);
  res.status(200).json(body);
});

router.post("/kakunin", authenticate, function (req, res, next) {
  // session
  console.log(req.session);
  console.log(req.session.name);

  // jsonwebtoken
  console.log(req.jwtPayload.email);
  res.status(200).json({
    message: "Hello!",
    authEmail: req.jwtPayload.email,
  });
});

module.exports = router;
