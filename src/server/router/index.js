const React = require("react")
const Router = require("@koa/router")
const fs = require('fs')
const serverBundle = require('../../../dist/server-bundle').default;
const { renderToString } = require('react-dom/server')

const { resolve } = require('path')

const router = new Router()

// 读取文件
const fileResolve = file => resolve(__dirname, file)
// 模板
const template = fs.readFileSync(fileResolve('../../../dist/index.html'), 'utf-8')
// 处理模板、store
const handleTemplate = template => {
    return ({ html }) => template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

module.exports = (app) => {
    // *解决跨域 start
    app.use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        if (ctx.method == 'OPTIONS') {
            ctx.body = 200;
        } else {
            await next();
        }
    });
    // *解决跨域 end

    router.get(['/about', '/'], async (ctx, next) => {
        // ctx.body = "服务端路由成功"
        const render = handleTemplate(template)
        const jsx = await serverBundle(ctx)
        const html = renderToString(jsx)
        const body = render({
            html
        })
        ctx.body = body
    });
    router.get('/api/getUserInfo', ctx => {
        ctx.body = {
            code: 0,
            message: '',
            data: {
                name: '张发发'
            }
        }
    })
    app
        .use(router.routes())
        .use(router.allowedMethods());
}
