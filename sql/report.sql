CREATE TABLE report (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        title VARCHAR(255) NOT NULL,
                        content TEXT NOT NULL,
                        category ENUM('sales', 'technical', 'financial') NOT NULL DEFAULT 'sales',
                        submitter VARCHAR(100) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 创建索引
CREATE INDEX idx_category ON report(category);
CREATE INDEX idx_created_at ON report(created_at);
