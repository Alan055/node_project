const Koa = require('koa')
// const mysql = require('mysql')
const router = require('koa-router')() // 这里直接执行
const app = new Koa()

router.get('/api/login', require('./api/login').index) // 登录
router.get('/api/register', require('./api/register').index) // 注册
router.get('/api/getReptile', require('./api/getReptile').index) // 查询爬虫相关接口
router.get('/api/getMovie', require('./api/getMovie').index) // 查询 电影爬虫相关接口
router.get('/api/getMovieType', require('./api/getMovieType').index) // 查询 电影爬虫相关接口

app.use(router.routes());
const conn = require('./server/index')

app.listen(3000);

// const reptile = require('./test/reptile')
// reptile.index() // 爬虫
// const movie = require('./test/movie')
// movie.index() // 爬虫 电影

