const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'Content-Type: text/plain; charset=utf-8'});
    res.end('Hello, Node.js!');
});

const PORT = 80;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down gracefully...');
    shutdown();
});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down gracefully...');
    shutdown();
});

// Function to perform graceful shutdown
function shutdown() {
    console.log('Closing server...');
    app.close((err) => {
        if (err) {
            console.error('Error occurred while closing server:', err);
            process.exit(1);
        }
        console.log('Server has been closed.');
        process.exit(0);
    });

    // Force close server after timeout
    setTimeout(() => {
        console.error('Could not close server in time, forcefully shutting down...');
        process.exit(1);
    }, shutdownTimeout).unref();
}
