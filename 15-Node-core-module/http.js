const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("index.html", (err, file) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/html" });
        res.end("<h1>Welcome</h1>");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(file);
      }
    });
  } else if (url === "/about/posts") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end("<h1>About</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
