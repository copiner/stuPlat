const pool = require('../config/db.config.js');

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

module.exports = {
    getAllUsers,
    updateUser
};
