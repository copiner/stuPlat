### 本地开发
```

# 安装依赖
npm install

# 开发模式运行（使用nodemon）
npm install -D nodemon
"scripts": {
  "dev": "nodemon app.js",
  "start": "node app.js"
}
npm run dev

```
### 生产部署

```

npm install pm2 -g
pm2 start app.js --name "report-system"
pm2 save
pm2 startup


nohup npm start > app.log 2>&1 &
```
### 运维
```
ps -ef | grep 'npm start'

netstat -anp tcp | grep 3000


```

### nginx

```
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```
