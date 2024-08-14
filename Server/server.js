const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;

    // redirect to about page

    case "/about-me":
      res.setHeader("location", "/about");
      res.statusCode = 302;
      res.end();
    default:
      path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
