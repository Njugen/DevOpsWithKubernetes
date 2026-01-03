const http = require('http');
const fs = require('fs');
const path = '/usr/src/files';
const fileName = 'log.txt';

const port = process.env.PORT || 3000;

const getPingPongsText = () => {
    let text = "Waiting, please reload in a moment...";
    try {
        text = fs.readFileSync(`${path}/${fileName}`, 'utf8');
    } catch (err) {
        console.error("Error reading file:", err);
    }
    return "Ping / Pongs: " + text;
}

const getStatusText = () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    const timestamp = new Date().toISOString();
    return `${timestamp}: ${randomString}`;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(getStatusText() + "\n" + getPingPongsText() + "\n");
})

server.listen(port)