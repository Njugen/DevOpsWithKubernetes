const http = require('http');

const port = process.env.PORT || 3000;

let pongs = 0;

const getPongs = () => {
    const text = `Pong count: ${pongs}`;
    pongs++;
    return text;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(getPongs() + "\n");
})

server.listen(port);