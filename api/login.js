exports.index = async function (ctx,next ) {
	console.log(ctx)




	ctx.response.body = "登录成功"
	next()
}