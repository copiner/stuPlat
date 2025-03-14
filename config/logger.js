const { createLogger, format, transports } = require('winston');

// 自定义日志格式
const customFormat = format.printf(({ level, message, timestamp }) => {
    if (typeof message === 'object') {
        message = JSON.stringify(message, null, 2);
    }
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customFormat
    ),
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
        new transports.Console()
    ]
});

module.exports = logger;
