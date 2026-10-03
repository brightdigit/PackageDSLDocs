const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 3000;
const TARGET_URL = 'http://localhost:5173';
const DOCS_PATH = '/swift-docc';

// Increase max listeners
require('events').EventEmitter.defaultMaxListeners = 15;

// Create proxy with enhanced options
const proxy = createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
    ws: true,
    secure: false,
    followRedirects: true,
    onError: (err, req, res) => {
        console.error('Proxy Error:', err);
        console.error('Failed URL:', req.url);
        res.status(500).send('Proxy Error');
    },
    onProxyReq: (proxyReq, req, res) => {
        // Log outgoing requests
        console.log('Proxying:', req.method, req.url, '→', TARGET_URL + req.url);
    },
    onProxyRes: (proxyRes, req, res) => {
        // Log responses
        console.log('Response:', proxyRes.statusCode, req.url);
    },
    headers: {
        // Ensure proper headers are set
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
});

// Serve static files with detailed logging
app.use(DOCS_PATH, (req, res, next) => {
    console.log('Static request:', req.url);
    express.static(path.join(__dirname, 'public/swift-docc'))(req, res, (err) => {
        if (err) {
            console.error('Static file error:', err);
        }
        next(err);
    });
});

// Use proxy for all other routes
app.use((req, res, next) => {
    if (!req.path.startsWith(DOCS_PATH)) {
        return proxy(req, res, next);
    }
    next();
});

const server = app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
    console.log(`Serving Swift documentation from ${DOCS_PATH}`);
    console.log(`Proxying all other requests to ${TARGET_URL}`);
});

// Handle proxy websocket
server.on('upgrade', proxy.upgrade);

// Cleanup
process.on('SIGTERM', () => {
    server.close(() => {
        proxy.close();
    });
});

// Handle errors
server.on('error', (e) => {
    console.error('Server error:', e);
});

process.on('uncaughtException', (e) => {
    console.error('Uncaught exception:', e);
});