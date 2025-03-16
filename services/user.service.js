/*
* Service层
* Controller应该只负责处理HTTP请求和响应，而Service层应该只包含业务逻辑。
* */
const userModel = require('../models/user.model.js');
const logger = require('../config/logger');


// 获取所有用户
const getAllUsersService = async () => {
    return await userModel.getAllUsers();
};

// 更新单个用户
const updateUserService = async (id, userData) => {
    const user = await userModel.getUserById(id);
    if (!user) {
        throw new Error('User not found');
    }

    return await userModel.updateUser(id, {
        status:1,
        ...userData
    });
};

// 根据 ID 获取单个用户
const getUserByIdService = async (id) => {
    return await userModel.getUserById(id);
};

const resetAllUsersStatusService = async () => {
    return await userModel.resetAllUsersStatus();
};

module.exports = {
    getAllUsersService,
    updateUserService,
    getUserByIdService,
    resetAllUsersStatusService
};
