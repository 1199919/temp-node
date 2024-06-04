const http = require('http');

const server = http.createServer((req, res) => {
    try {
        if (req.url === '/') {
            // res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to our home page');
        } else if (req.url === '/about') {
            // res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Here is our short history');
        } else {
            // res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
                <h1>Oops!</h1>
                <p>We can't seem to find the page you're looking for</p>
                <a href="/">Back to home</a>
            `);
        }
    } catch (err) {
        // res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Internal Server Error</h1>
            <p>Something went wrong on our end. Please try again later.</p>
        `);
        console.error('Server error:', err);
    }
});

server.listen(7000, () => {
    console.log('Server is listening on port 7000...');
});
