const url = require('url');
const qs = require('querystring');
const fn = require('./../common/common').fn
const moment = require('moment')


exports.index = async function (ctx,next ) {
	console.log('register')

	let query = url.parse(ctx.request.url).query
	const username = qs.parse(query).username
	const password = qs.parse(query).password
	// 注册

	const sql = `insert into userlist values(null, "${username}", "${password}","${moment().format('YYYY-MM-DD')}")`
	await fn(sql).then((res)=>{
		ctx.response.body = res.affectedRows == 1 ? '注册成功' : '注册失败'
		console.log(ctx.response.body)
	}).catch((err)=>{
		console.log(err)
	})
}
