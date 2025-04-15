const pool = require('../config/db.config.js');
const logger = require('../config/logger');

//env1 环境  val1 实验板测量值 vol1环境1的电压值 以此类推
// 创建报表数据
const createReport = async (reportData) => {
    const [result] = await pool.execute('INSERT INTO report (seatNumber,sensor,env1,vol1, val1,env2,vol2,val2,env3,vol3,val3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            reportData.id,
            reportData.sensor,
            reportData.env1,reportData.vol1,reportData.val1,
            reportData.env2,reportData.vol2,reportData.val2,
            reportData.env3,reportData.vol3,reportData.val3
        ]);
    return result.affectedRows;
};

// 获取所有报表数据
const getAllReports = async () => {
    const [rows] = await pool.execute('SELECT * FROM report');
    return rows;
};

// 根据 ID 获取单个报表数据
const getReportById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM report WHERE seatNumber = ?', [id]);
    return rows[0];
};

// 更新报表数据
const updateReport = async (id, reportData) => {
    const [result] = await pool.execute('UPDATE report SET sensor = ?, env1 = ?,vol1 = ?, val1 = ?, env2 = ?,vol2 = ?, val2 = ?, env3 = ?,vol3 = ?, val3 = ? WHERE seatNumber = ?', [
        reportData.sensor,
        reportData.env1,reportData.vol1,reportData.val1,
        reportData.env2,reportData.vol2,reportData.val2,
        reportData.env3,reportData.vol3,reportData.val3,
        id]);
    return result.affectedRows;
};

// 删除报表数据
const deleteReport = async (id) => {
    const [result] = await pool.execute('DELETE FROM report WHERE seatNumber = ?', [id]);
    return result.affectedRows;
};

// 根据查询条件获取报表数据
const getReportsByQuery = async (query) => {
    const [rows] = await pool.execute('SELECT * FROM report WHERE sensor LIKE ?', [`%${query}%`]);
    return rows;
};


//判断某条数据是否存在
const countReport = async (id) => {
    const [rows] = await pool.execute('SELECT count(*) as seatCount FROM report WHERE seatNumber = ?', [id]);
    return rows[0];
};

//TRUNCATE TABLE report;

const resetReport = async () => {
    const [result] = await pool.execute('TRUNCATE TABLE report');
    return result.affectedRows;
};

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport,
    getReportsByQuery,
    countReport,
    resetReport
};
