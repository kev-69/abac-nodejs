const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRATION } = process.env;

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token not found' }); 
        }

        try {
            const decode = jwt.verify(token, JWT_SECRET);
            req.user = decode;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        return res.status(401).json({ message: 'Authorization header not found' });
    }
}

module.exports = verifyToken;