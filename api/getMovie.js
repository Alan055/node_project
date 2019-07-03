const url = require('url');
const qs = require('querystring');
const fn = require('./../common/common').fn

exports.index = async function (ctx, next) {

	let query = url.parse(ctx.request.url).query
	const pageNumber = qs.parse(query).pageNumber // 第几页
	const pageSize = qs.parse(query).pageSize // 一页的长度
	let  keyword = qs.parse(query).keyword // 关键字
	let  type = qs.parse(query).type || 0 // 回答数量
	let  startDate = qs.parse(query).startDate // 开始时间
	let  endDate = qs.parse(query).endDate // 结束时间
	let sql_date = startDate ? `and create_date>="${startDate}" and create_date<="${endDate}" ` : ''
	const sql = `select * from movie_data where name like "%${keyword}%" and type="${type}" ${sql_date} order by id asc limit ${pageNumber*pageSize}, ${pageSize}  `
	const sql2 = `select count(*) from movie_data where name like "%${keyword}%" and type="${type}" ${sql_date}`
	const sql3 = `select * from movie_type`
	let p = [fn(sql),fn(sql2),fn(sql3)];
	await Promise.all(p).then(result=>{
		ctx.response.body = {
			list: result[0],
			total: result[1][0]["count(*)"],
			typeList: result[2]
		}
	}).catch((err)=>{
		console.log(err)
	})
}

