const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> home page </h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "jane doe",
        email: "jane@email.com",
      },
      {
        name: "paul doe",
        email: "paul@email.com",
      },
    ];

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
