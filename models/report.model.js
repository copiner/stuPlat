const pool = require('../config/db.config.js');

// 创建报表数据
const createReport = async (reportData) => {
    const [result] = await pool.execute('INSERT INTO report (column1, column2) VALUES (?, ?)', [reportData.column1, reportData.column2]);
    return result.insertId;
};

// 获取所有报表数据
const getAllReports = async () => {
    return [
        {
            id: 1,
            name: 'Report 1',
            date: '2023-01-01'
        },
        {
            id: 2,
            name: 'Report 2',
            date: '2023-01-02'
        }
    ]

    const [rows] = await pool.execute('SELECT * FROM report');
    return rows;
};

// 根据 ID 获取单个报表数据
const getReportById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM report WHERE id = ?', [id]);
    return rows[0];
};

// 更新报表数据
const updateReport = async (id, reportData) => {
    const [result] = await pool.execute('UPDATE report SET column1 = ?, column2 = ? WHERE id = ?', [reportData.column1, reportData.column2, id]);
    return result.affectedRows;
};

// 删除报表数据
const deleteReport = async (id) => {
    const [result] = await pool.execute('DELETE FROM report WHERE id = ?', [id]);
    return result.affectedRows;
};

// 根据查询条件获取报表数据
const getReportsByQuery = async (query) => {
    const [rows] = await pool.execute('SELECT * FROM report WHERE column1 LIKE ?', [`%${query}%`]);
    return rows;
};

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport,
    getReportsByQuery
};
