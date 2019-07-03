const mysql = require('mysql')

// 链接数据库
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'a123456',
	port: '3306',
	database: 'alanSQL',
})
connection.connect();
exports.connection = connection
