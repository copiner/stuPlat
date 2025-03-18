### 本地开发
```

# 安装依赖
npm install

# 开发模式运行（使用nodemon）
npm run dev
"scripts": {
  "dev": "nodemon app.js",
  "start": "node app.js"
}
npm run dev

```
### 生产部署

```
nohup


nohup node app.js > app.log 2>&1 &

nohup npm start > app.log 2>&1 &




nohup：用于忽略挂起信号（SIGHUP），确保程序在用户退出登录后继续运行。

node app.js：启动 Express 服务的命令。

> app.log：将标准输出（stdout）重定向到 app.log 文件中。

2>&1：将标准错误输出（stderr）重定向到标准输出，也就是也会写入 app.log 文件中。

&：将命令放到后台执行





可以使用 tail 命令查看日志文件的末尾内容，以确认服务是否正常启动
tail -f app.log

```
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
### ssh连接远程服务器
```
ssh -p 22 root@168.20.19.60
```
### 连接mysql
```
mysql -u root -p
```

### 运维
```
ps -ef | grep 'npm start'


ps -ef | grep 'node app'


ps -ef | grep 'node'



netstat -anp tcp | grep 3000


```
