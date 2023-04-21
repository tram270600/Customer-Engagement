const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://wa-eit-eit1.azurewebsites.net',
      changeOrigin: true,
    })
  );
};