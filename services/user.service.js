/*
* Service层
* Controller应该只负责处理HTTP请求和响应，而Service层应该只包含业务逻辑。
* */
const userModel = require('../models/user.model.js');
const logger = require('../config/logger');


// 获取所有报表数据
const getAllUsersService = async () => {
    return await userModel.getAllUsers();
};

// 更新报表数据
const updateUserService = async (id, reportData) => {
    return await userModel.updateUser(id, reportData);
};


module.exports = {
    getAllUsersService,
    updateUserService,
};
