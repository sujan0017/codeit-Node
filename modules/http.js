import { createServer } from "http";

const server = createServer((request, response) => {
  // response.setHeader("Content-Type", "text/plain");
  // response.statusCode = 200; // status code 200 means OK
  // response.writeHead(500, "" , {"Content-Type": "application/json"});

  // response.write(JSON.stringify({message:"Namaskar Ramu Kaka"}));

  // response.end();

  if(request.url === "/"){
    response.end("Home Page")
  }else if (request.url === "/about") {
    response.end("About page")
  } else {
    response.statusCode = 404; // status code 404 means NOT FOUND
    response.end("Not Found")
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000"); // Server is now listening on port 5000
});
