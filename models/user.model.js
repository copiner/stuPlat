const pool = require('../config/db.config.js');
const logger = require('../config/logger');
// 获取所有报表数据
const getAllUsers = async () => {
    const [rows] = await pool.execute('SELECT * FROM user');
    return rows;
};

// 更新报表数据
const updateUser = async (id, userData) => {
    const [result] = await pool.execute('UPDATE user SET name = ?, status = ? WHERE seatNumber = ?', [userData.name, userData.status,id]);
    return result.affectedRows;
};

// 根据 ID 获取单个用户
const getUserById = async (id) => {

    const [rows] = await pool.execute('SELECT * FROM user WHERE seatNumber = ?', [id]);
    return rows[0];
};

const resetAllUsersStatus = async () => {
    const [result] = await pool.execute("UPDATE  user SET status = 0, name = ''");
    return result.affectedRows;
};

module.exports = {
    getAllUsers,
    updateUser,
    getUserById,
    resetAllUsersStatus
};
