const http = require('http');
const livereload = require('livereload');
const fs = require('fs').promises;

const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');

    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
}

const server = http.createServer(requestListener);
server.listen(8080);

var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/index.html", __dirname + "/src");
