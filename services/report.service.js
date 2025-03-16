/*
* Service层
* Controller应该只负责处理HTTP请求和响应，而Service层应该只包含业务逻辑。
* */
const reportModel = require('../models/report.model.js');
const logger = require('../config/logger');
// 创建报表数据
const createReportService = async (reportData) => {
    const id = reportData.id;
    const result = await reportModel.countReport(id);
    if (result.seatCount > 0) {
        return await reportModel.updateReport(id, reportData);
    } else {
        return await reportModel.createReport(reportData);
    }
};

// 获取所有报表数据
const getAllReportsService = async () => {
    return await reportModel.getAllReports();
};

// 根据 ID 获取单个报表数据
const getReportByIdService = async (id) => {
    return await reportModel.getReportById(id);
};

// 更新报表数据
const updateReportService = async (id, reportData) => {
    return await reportModel.updateReport(id, reportData);
};

// 删除报表数据
const deleteReportService = async (id) => {
    return await reportModel.deleteReport(id);
};

// 根据查询条件获取报表数据
const getReportsByQueryService = async (query) => {
    try {
        return await reportModel.getReportsByQuery(query);
    } catch (err) {
        throw new AppError('Database operation failed', 500);
    }

};

module.exports = {
    createReportService,
    getAllReportsService,
    getReportByIdService,
    updateReportService,
    deleteReportService,
    getReportsByQueryService
};
