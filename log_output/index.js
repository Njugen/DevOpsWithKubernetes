const http = require('http');
const fs = require('fs');
const path = '/usr/src/files';
const fileName = 'log.txt';

const port = Number(process.env.PORT) || 3000;

const generateText = () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    const timestamp = new Date().toISOString();
    return `${timestamp}: ${randomString}`;
}


if (port === 3000) {
    const server = http.createServer((req, res) => {
        let text;
        try {
            text = fs.readFileSync(`${path}/${fileName}`, 'utf8');
        } catch (err) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("Something went wrong. There might be an error in the file system.\n");
            return;
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(text + "\n");
    })

    server.listen(port);
} else if (port === 3001) {
    setInterval(() => {
        const text = generateText();
        fs.writeFileSync(`${path}/${fileName}`, text);
    }, 5000);
}