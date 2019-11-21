const http = require("http");

//create a server
let server = http.createServer(function(req, res) {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
     <head>
      <title>My First Web Server</title>
     </head>
     <body>
       <h1>Hello, anyone there?</h1>
       <div id="content"></div>
     <script src="script.js"></script>
     </body>
    </html>
   `);
  } else if (req.url === "/script.js") {
    res.setHeader("Content-Type", "text/javascript");
    res.write(`document
    .getElementById('content')
    .appendChild(document.createTextNode('Welcome to Server-land!'));`);
  } else if (req.url === "/style.css") {
    res.setHeader("Content-Type", "text/css");
    res.write(`^#content { color: blue }`);
  } else {
    res.write("What exactly are you looking for?");
  }
  res.end();
});

server.listen(3000, function() {
  console.log("server has started at port 3000");
}); //the server listens on port 3000
