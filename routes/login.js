const express = require("express");
const router = express.Router();

/* database化 */
const account = {
  email: "admin@example.com",
  name: "admin",
  password: "admin",
};

router.post("/", function (req, res, next) {
  if (account.password === req.body.password) {
    req.session.name = account.name;
    const hour = 1800000;
    req.session.cookie.expires = new Date(Date.now() + hour);
    req.session.cookie.maxAge = hour;
  }
  console.log(req.session);
  console.log(req.session.name);
  res.send("respond with a resource");
});

module.exports = router;
