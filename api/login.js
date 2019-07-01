const url = require('url');
const qs = require('querystring');
const fn = require('./../common/common').fn




exports.index = async function (ctx, next) {
	console.log("login")
	// 测试异步
	// await fn().then((data)=>{
	// 	ctx.response.body = data
	// })

	let query = url.parse(ctx.request.url).query
	const username = qs.parse(query).username
	const password = qs.parse(query).password
	const sql = `select * from userlist where username="${username}" and password="${password}";`
	await fn(sql).then((res)=>{
		ctx.response.body = res.length ? '登录成功' : '账号或密码错误！'
		console.log(ctx.response.body)
	}).catch((err)=>{
		console.log(err)
	})
}

