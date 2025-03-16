const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller.js');

// 创建报表数据
router.post('/', reportController.createReport);
// 获取所有报表数据
router.get('/', reportController.getAllReports);
// 根据 ID 获取单个报表数据
router.get('/:id', reportController.getReportById);
// 更新报表数据
router.put('/:id', reportController.updateReport);
// 删除报表数据
router.delete('/:id', reportController.deleteReport);
// 根据查询条件获取报表数据
router.get('/query', reportController.getReportsByQuery);


router.post('/init', reportController.resetReport);

module.exports = router;


/*

router
    .route('/')
    .post(reportController.createReport)
    .get(reportController.getReports);

*/
