const http = require('http');

const port = process.env.PORT || 3000;

const getStatusText = () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    const timestamp = new Date().toISOString();
    return `${timestamp}: ${randomString}`;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(getStatusText() + "\n");
})

server.listen(port)