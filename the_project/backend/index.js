const http = require('http');
const {
    readdirSync,
    existsSync,
    createReadStream,
    writeFileSync,
    unlinkSync
} = require('fs');
const { join } = require('path');

const path = "/usr/src/files/images";
const filename = "random-image";

const port = process.env.PORT || 3000;

const imageExists = () => {
    if (!existsSync(path)) return false;

    return readdirSync(path).some(f => f.startsWith(`${filename}.`));
};

const saveImageToFileStorage = (imageData) => {
    const { filetype, buffer } = imageData;

    if (existsSync(path)) {
        const files = readdirSync(path).filter(f => f.startsWith(`${filename}.`));
        files.forEach(file => {
            unlinkSync(join(path, file));
        });
    }

    writeFileSync(`${path}/${filename}.${filetype}`, buffer);
};

const getImageFilePath = () => {
    if (!existsSync(path)) return null;

    const file = readdirSync(path).find(item => item.startsWith(`${filename}.`));

    return file ? join(path, file) : null;
};

const getMimeType = (filetype) => {
    const map = {
        jpg: 'image/jpg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif'
    };

    const fileTypeLowerCase = filetype.toLowerCase();
    return map[fileTypeLowerCase] || 'application/octet-stream';
};

const getRandomWebImageData = async () => {
    const response = await fetch('https://picsum.photos/1200', { method: 'GET' });
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const format = response.headers.get('Content-Type');

    const formatParts = format?.split('/');
    const filetype = formatParts ? formatParts[1] : 'jpg';

    return {
        buffer,
        filetype
    };
};

const runAnonymousImagePrep = () => {
    (async () => {
        try {
            const imageData = await getRandomWebImageData();
            saveImageToFileStorage(imageData);
        } catch (error) {
            console.error("Error saving image to file storage:", error);
        }
    })();
}

const handleStoragePath = (req, res) => {
    const { headers } = req;
    const url = new URL(req.url, `http://${headers.host}`);
    const pathname = url.pathname;

    const requestedFile = pathname.slice(9);
    const filePath = getImageFilePath();

    if (filePath) {
        const filename = filePath.split('/').pop();
        const requestedBaseName = requestedFile.split('.')[0];
        const actualBaseName = filename.split('.')[0];

        if (requestedBaseName === actualBaseName) {
            const filetype = filePath.split('.').pop();
            const mimeType = getMimeType(filetype);
            res.statusCode = 200;
            res.setHeader("Content-Type", mimeType);
            res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
            res.setHeader("Pragma", "no-cache");
            res.setHeader("Expires", "0");

            return createReadStream(filePath).pipe(res);
        }
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end('Nothing here');
}


if (!imageExists()) runAnonymousImagePrep();
setInterval(runAnonymousImagePrep, 10 * 60 * 1000);

const server = http.createServer((req, res) => {
    const { method, headers } = req;
    const url = new URL(req.url, `http://${headers.host}`);
    const pathname = url.pathname;

    if (method === 'GET') {
        if (pathname.startsWith('/storage/')) return handleStoragePath(req, res);
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");

    res.end('Nothing here');
});

server.listen(port);