exports.index = async function (ctx,next ) {
	console.log(ctx)
	ctx.response.body = "注册成功"

	next()
}