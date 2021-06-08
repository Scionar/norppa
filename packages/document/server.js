const http = require('http');
var nodeStatic = require('node-static');
const livereload = require('livereload');
const path = require('path');
const fs = require('fs').promises;
const url = require('url');

let mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
  '.ico': 'image/x-icon'
};

const requestListener = function (req, res) {
  const url = req.url.split('?')[0];

  if (url === '/') {
    fs.readFile(__dirname + '/index.html').then((contents) => {
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(contents);
    });
  } else {
    fs.readFile(__dirname + url)
      .then((contents) => {
        let extname = String(path.extname(url)).toLowerCase();
        let contentType = mimeTypes[extname] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(contents, 'utf-8');
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const server = http.createServer(requestListener);
server.listen(8080);

var lrserver = livereload.createServer({
  originalPath: 'http://localhost:8080/'
});
lrserver.watch([
  __dirname + '/index.html',
  __dirname + '/base.css',
  __dirname + '/lib'
]);
