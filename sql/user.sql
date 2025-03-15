-- 创建 user 表
CREATE TABLE user (
    -- 姓名，使用 VARCHAR 类型，最大长度为 50
                      name VARCHAR(50) NOT NULL,
    -- 座位号，使用 VARCHAR 类型，最大长度为 20，可包含字母
                      seatNumber VARCHAR(20) NOT NULL,
    -- 登录状态，使用 TINYINT 类型，0 表示未登录，1 表示已登录
                      status TINYINT NOT NULL DEFAULT 0,
    -- 设置座位号为唯一键，确保每个座位号只能对应一个用户
                      UNIQUE (seatNumber)
);