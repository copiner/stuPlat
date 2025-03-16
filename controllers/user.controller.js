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
        res.status(200).json({
            status: 'success',
            data:users
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 登陆更新用户数据
const updateUser = async (req, res) => {
    try {
        const userData = req.body;
        const id = userData.seatnumber;
        const affectedRows = await userService.updateUserService(id, userData);
        if (affectedRows > 0) {
            res.status(200).json({
                status: 'success',
                message:'User updated successfully',
                data:{
                    key:id,
                    name:userData.name
                }
            });
        } else {
            res.status(500).json({
                status: 'fail',
                message:'User updated failed'
            });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).json({
            status: 'fail',
            message:error.message
        });
    }
};

// 根据 ID 获取单个报表数据
/*
 res.status(200).json({
  status: 'success',
  ...result
});
*/
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserByIdService(id);
        if (user) {
            res.status(200).json({
                status: 'success',
                message:'User updated successfully',
                data:user
            });
        } else {
            res.status(500).json({
                status: 'fail',
                message:'User updated failed'
            });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//重置用户登录状态
const resetAllUsersStatus = async (req, res) => {
    try {
        const affectedRows = await userService.resetAllUsersStatusService();
        res.status(200).json({
            status: 'success',
            message:'User reset successfully'
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllUsers,
    updateUser,
    getUserById,
    resetAllUsersStatus
};
