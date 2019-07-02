// 引用url模块
const url = require('url')

// 引用users表的控制器模块
const pagesController = require('../controllers/pagesControllers.js')
// 引用express
const express = require('express')
// 封装路由模块
const router = express.Router()

console.log(pagesController);

// 前台页面
router.get('/', pagesController.getIndexPage)
    .get('/list', pagesController.getListPage)
    .get('/detail', pagesController.getDetailPage)
    // 后台页面
    .get('/admin/settings', (req, res) => {
        let urlobj = url.parse(req.url, true)
        req.fileName = urlobj.pathname
        console.log(req.fileName)
        pagesController.gethoutai(req, res)
    })
module.exports = router