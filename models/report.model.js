const pool = require('../config/db.config.js');
const logger = require('../config/logger');

// 创建报表数据
const createReport = async (reportData) => {

    const [result] = await pool.execute('INSERT INTO report (seatNumber,useCase,sensor,env1,val1,env2,val2,env3,val3,env4,val4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            reportData.id,
            reportData.useCase,
            reportData.sensor,
            reportData.env1,reportData.val1,
            reportData.env2,reportData.val2,
            reportData.env3,reportData.val3,
            reportData.env4,reportData.val4
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
    const [result] = await pool.execute('UPDATE report SET useCase = ?, sensor = ?, env1 = ?, val1 = ?, env2 = ?, val2 = ?, env3 = ?, val3 = ?, env4 = ?, val4 = ? WHERE seatNumber = ?', [
        reportData.useCase,
        reportData.sensor,
        reportData.env1,reportData.val1,
        reportData.env2,reportData.val2,
        reportData.env3,reportData.val3,
        reportData.env4,reportData.val4,
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

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport,
    getReportsByQuery,
    countReport
};
