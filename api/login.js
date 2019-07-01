function fn() {
	return new Promise((resolve,reject)=>{
		setTimeout(function () {
			resolve("登录成功")
		}, 2000)
	})
}

exports.index = async function (ctx, next) {
	console.log("login")

	await fn().then((data)=>{
		ctx.response.body = data
	})

}

