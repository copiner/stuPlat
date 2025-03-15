/*
* Controller层
* Controller应该只负责处理HTTP请求和响应，而Service层应该只包含业务逻辑。
* */

const userService  = require('../services/user.service');
const logger = require('../config/logger');


// 获取所有报表数据
const getAllUsers = async (req, res) => {
    try {

        const users = await userService.getAllUsersService();
        logger.info(users);
        res.json(users);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 更新报表数据
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedReport = req.body;
        const affectedRows = await userService.updateUserService(id, updatedReport);
        if (affectedRows > 0) {
            res.json({ message: 'Report updated successfully' });
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    getAllUsers,
    updateUser
};
