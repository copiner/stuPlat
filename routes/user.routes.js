const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

// 获取所有用户数据
router.get('/', userController.getAllUsers);
// 更新用户数据
router.put('/:id', userController.updateUser);

module.exports = router;


/*

router
    .route('/')
    .post(reportController.createReport)
    .get(reportController.getReports);

*/
