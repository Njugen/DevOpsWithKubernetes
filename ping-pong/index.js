const http = require('http');
const fs = require('fs');
const path = '/usr/src/files';
const fileName = 'log.txt';
const port = process.env.PORT || 3000;

let pongs = 0;

const getPingPongNumber = () => {
    let number = 0;
    try {
        number = fs.readFileSync(`${path}/${fileName}`, 'utf8');
    } catch (err) {
        console.error("Error reading file:", err);
    }
    return parseInt(number);
}

const server = http.createServer((req, res) => {
    if (pongs === 0) {
        pongs = getPingPongNumber();
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Pong count: ${pongs}` + "\n");
    fs.writeFileSync(`${path}/${fileName}`, pongs.toString());
    pongs++;
})

server.listen(port);