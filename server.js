const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("public")) // para uzar os arquivos estaticos como CSS e JS
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get('/', (req, res) => {
    return res.render("about")
})

server.get('/contents', (req, res) => {
    return res.render("contents")
})

server.listen(5000, function () {
    console.log("server is runing")
})