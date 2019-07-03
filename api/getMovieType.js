const url = require('url');
const qs = require('querystring');
const fn = require('./../common/common').fn

async function group(typeList,ctx){
	let sql = "SELECT "
	for(let val of typeList){
		sql += `SUM(type='${val.type_name}') AS '${val.id}',`
	}
	sql = sql.substr(0,sql.length-1)
	sql += ' FROM movie_data;'
	let p = [fn(sql)]
	await Promise.all(p).then(result=>{
		ctx.response.body = result[0]
	}).catch((err)=>{
		console.log(err)
	})
}


exports.index = async function (ctx, next) {
	// 先查类型表
	const sql = `select * from movie_type;`
	let p = [fn(sql)];
	await Promise.all(p).then(result=>{
		group(result[0],ctx)
	}).catch((err)=>{
		console.log(err)
	})
}

