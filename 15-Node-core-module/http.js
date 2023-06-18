const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plaintext" });
    res.end("<h1>Welcome!</h1>");
  }
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
