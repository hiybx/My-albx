
// 引用模块
const express = require('express')
const fs = require('fs')
const path = require('path')
// 引用路由模块
const router = require('./router/index.js')
// 创建应用
const app = express()
// 添加对指定端口的监听
app.listen(3000, () => {
    console.log('running at http://127.0.0.1:3000')
})

// 添加静态资源托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

// 添加路由配置
app.use(router)