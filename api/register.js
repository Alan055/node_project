exports.index = async function (ctx,next ) {
	console.log('register')
	ctx.response.body = "注册成功"
}