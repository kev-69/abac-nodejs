const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRATION } = require('../config/env');

const user = {
    id: 2,
    name: "Bismark Obuobi",
    role: "admin",
    department: "IT",
    accessLevel: "4",
}

const token = jwt.sign(user, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION
});
console.log(`jwt token for ${user.role} is ${token}`);
console.log(`jwt secret is ${JWT_SECRET}`);
console.log(`jwt expiration is ${JWT_EXPIRATION}`);