require('dotenv').config();
const logger = require('../config/logger');

module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = statusCode === 500 ? 'Server Error' : err.message;

    logger.error(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method}`);

    res.status(statusCode).json({
        error: {
            message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};
