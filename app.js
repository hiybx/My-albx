
// 引用模块
const express = require('express')
const fs = require('fs')
const path = require('path')
// 创建应用
const app = express()
// 添加对指定端口的监听
app.listen(3000, () => {
    console.log('running at http://127.0.0.1:3000')
})

// 添加静态资源托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, './views/index.html'), (err, data) => {
        if (err) return res.send('404')
        console.log(data);
        res.end(data)
    })
})