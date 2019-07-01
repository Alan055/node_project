const Koa = require('koa')
const router = require('koa-router')() // 这里直接执行
const app = new Koa()

router.get('/api/login', require('./api/login').index) // 登录
router.get('/api/register', require('./api/register').index) // 注册

app.use(router.routes());

// 链接数据库
// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '123456',
// 	port: '3306',
// 	database: 'alanSQL',
// })
// connection.connect();
app.listen(3000);





// function login(req, res) {
// 	let params = url.parse(req.url).query
// 	let username = qs.parse(params).username
// 	let password = qs.parse(params).password
// 	console.log(username, password)
// 	const sql = `select * from userlist where username="${username}" and password="${password}"`
// 	console.log(sql)
// 	connection.query(sql, (err, list, fields) => {
// 		if (err) {
// 			return console.log("报错了")
// 		}
// 		res.end(list.length?'登录成功':'账号或密码错误！')
// 	})
// }


