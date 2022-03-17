const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use('/api', createProxyMiddleware({
        target: `http://${process.env.REACT_APP_RI_BACKEND_URL || 'localhost'}`,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '',
        },
    }));

    console.log('Created proxy to backend.');
};