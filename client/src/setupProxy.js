const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://localhost:5000',
            secure: false,
            changeOrigin: true
        })
    );
};