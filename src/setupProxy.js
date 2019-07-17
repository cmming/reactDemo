const proxy = require('http-proxy-middleware');

module.exports = function (app) {

    console.log('开启 网络代理')
    app.use(proxy(
        '/api',
        {target: 'http://localhost:8090/', changeOrigin: true, pathRewrite: {'^/api/': ''}},
        )
    );
};