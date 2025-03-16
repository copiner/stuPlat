require('dotenv').config();
const express = require('express');
const reportRoutes = require('./routes/report.routes');
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middlewares/error.middleware');
const logger = require('./config/logger');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路由
app.use('/lesson/reports', reportRoutes);
app.use('/lesson/users', userRoutes);
// 错误处理
app.use(errorHandler);

//console.log(process.env.DB_PASSWORD)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
