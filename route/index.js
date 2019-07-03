const Router = require('koa-router')
const route = new Router()

const login = require('../api/login')
const register = require('../api/register')


route.use('/api/login',login.login);
// route.use(route.routes());
// route.use('/api/register',register);


exports.route = route



module.exports = {

}
