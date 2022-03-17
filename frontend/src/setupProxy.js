const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use('/api', createProxyMiddleware({
        target: process.env.REACT_APP_RI_BACKEND_URL || 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '',
        },
    }));

    console.log('Created proxy to backend.');
};