/*
* Controller层
* Controller应该只负责处理HTTP请求和响应，而Service层应该只包含业务逻辑。
* */

const reportService  = require('../services/report.service');
const logger = require('../config/logger');

// 创建报表数据
const createReport = async (req, res) => {
    try {
        const newReport = req.body;
        const id = await reportService.createReportService(newReport);
        res.status(201).json({ id, ...newReport });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 获取所有报表数据
const getAllReports = async (req, res) => {
    try {

        const reports = await reportService.getAllReportsService();
        logger.error(reports);
        res.json(reports);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 根据 ID 获取单个报表数据
/*
 res.status(200).json({
  status: 'success',
  ...result
});
*/
const getReportById = async (req, res) => {
    try {
        const id = req.params.id;
        const report = await reportService.getReportByIdService(id);
        if (report) {
            res.json(report);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 更新报表数据
const updateReport = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedReport = req.body;
        const affectedRows = await reportService.updateReportService(id, updatedReport);
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

// 删除报表数据
const deleteReport = async (req, res) => {
    try {
        const id = req.params.id;
        const affectedRows = await reportService.deleteReportService(id);
        if (affectedRows > 0) {
            res.json({ message: 'Report deleted successfully' });
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 根据查询条件获取报表数据
const getReportsByQuery = async (req, res) => {
    try {
        const query = req.query.query;
        const reports = await reportService.getReportsByQueryService(query);
        res.json(reports);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport,
    getReportsByQuery
};
