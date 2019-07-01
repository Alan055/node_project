const conn = require('./../server/index')

function fn(sql) {
	return new Promise((resolve,reject)=>{
		conn.connection.query(sql, (err, list) => {
			err? reject(err) : resolve(list)
		})
	})
}

exports.fn = fn
