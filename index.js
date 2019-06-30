const http = require('http');
const mysql = require('mysql');
const url = require('url')
const qs = require('querystring');//解析参数的库
// 链接数据库
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	port: '3306',
	database: 'alanSQL',
})
connection.connect();

http.createServer(function (req, res) {
	// 写路由
	var path = url.parse(req.url).pathname;
	console.log(path)
	switch (path) {
		case '/':
			res.end('home');
			break;
		case '/login':
			login(req, res);
			break;
		case '/welcome':
			res.end('welcome');
			break;
	}


}).listen(3000);

function login(req, res) {
	let params = url.parse(req.url).query
	let username = qs.parse(params).username
	let password = qs.parse(params).password
	console.log(username, password)
	const sql = `select * from userlist where username="${username}" and password="${password}"`
	console.log(sql)
	connection.query(sql, (err, list, fields) => {
		if (err) {
			return console.log("报错了")
		}
		res.end(list.length?'登录成功':'账号或密码错误！')
	})
}
