const url = require('url');
const qs = require('querystring');
const fn = require('./../common/common').fn

const async = require('async')
const conn = require('./../server/index')


async function group(typeList, ctx) {
	let sql = "SELECT "
	for (let val of typeList) {
		sql += `SUM(type='${val.type_name}') AS '${val.id}',`
	}
	sql = sql.substr(0, sql.length - 1)
	sql += ' FROM movie_data;'
	let p = [fn(sql)]
	await Promise.all(p).then(result => {
		ctx.response.body = result[0]
	}).catch((err) => {
		console.log(err)
	})
}




exports.index =async function(ctx, next){
	await async.waterfall([
		function(callback) {
			// 先查类型表
			const sql = `select * from movie_type;`
			conn.connection.query(sql, (err, list) => {
				if (err) throw err
				callback(null, list)
			})
		},
		function(typeList, callback) {
			let sql = "SELECT "
			for (let val of typeList) {
				sql += `SUM(type='${val.type_name}') AS '${val.id}',`
			}
			sql = sql.substr(0, sql.length - 1)
			sql += ' FROM movie_data;'
			conn.connection.query(sql, (err, list) => {
				if (err) throw err
				callback(null, list)
			})

		}
	], (err, result) => {
		ctx.response.body = result[0]
	})
}


