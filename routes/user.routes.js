const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


//用户登录,更新用户数据
// router.post('/', userController.updateUser);
//
// // 获取所有用户数据
// router.get('/', userController.getAllUsers);
router
    .route('/')
    .post(userController.updateUser)
    .get(userController.getAllUsers);

router.post('/init', userController.resetAllUsersStatus);

module.exports = router;

/*


*/
