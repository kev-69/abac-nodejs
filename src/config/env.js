const dotenv = require('dotenv');
dotenv.config();

const env = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "default_secret",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',
}

module.exports = env;