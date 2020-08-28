module.exports = {
  jwt: {
    secret: "secret_hook",
    options: {
      algorithm: "HS256",
      expiresIn: "10m",
    },
  },
  session: {
    maxAge: 1800000,
  },
};
