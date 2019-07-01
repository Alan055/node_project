const http = require('http');
const mysql = require('mysql');
const url = require('url')
const qs = require('querystring');//解析参数的库



function start(route){

	function onRequest(req,res) {
		let pathname = url.parse(req.url).pathname // 拿到接口的url参数部分

		route(pathname) // 跳到指定的路由目录中做处理

		res.writeHead(200, {"Content-Type": "text/plain"}); // 写头部
		res.end(str);
	}

	http.createServer(onRequest).listen(3000)
}

exports.start = start