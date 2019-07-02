const fs = require('fs')
const path = require('path')


module.exports.getIndexPage = (req, res) => {
    fs.readFile(path.join(__dirname, '/../views/index.html'), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
}

module.exports.getListPage = (req, res) => {
    fs.readFile(path.join(__dirname, '/../views/list.html'), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
}

module.exports.getDetailPage = (req, res) => {
    fs.readFile(path.join(__dirname, '/../views/detail.html'), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
}
module.exports.gethoutai = (req, res) => {
    fs.readFile(path.join(__dirname, '/../views' + req.fileName + '.html'), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
}


