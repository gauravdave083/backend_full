const http = require("http");
const fs = require("fs");
const url = require("url");

// const myServer = http.createServer((req, res) => {
//      console.log("New Request Recieved")
//      res.end("Hello From Server")
// });

const myServer = http.createServer((req, res) => {
     if (req.url === "/favicon.ico") return res.end
     const log = `${Date.now()}: ${req.url} New Req Recieved \n`
     const myUrl = url.parse(req.url, true);


     fs.appendFile("log.txt", log , (err, data) => {
          switch (myUrl.pathname) {
               case "/":
                    if (req.method === "GET") res.end("Homepage")
                    break;

               case "/about":
                    const username = myUrl.query.myname;
                    res.end(`Hi, ${username}`)
                    break;

               case "/search":
                    const search = myUrl.query.search_query;
                    res.end("Here are your results for" + search);
                    break;
               
               case "/signup":
                    if (req.method === "GET") res.end("This is your signup form");
                    else if (req.method === "POST") {
                         // DB Query
                         res.end("Success");
                    }
                    break;

               default:
                    res.end("404 Not Found");
          }
     })
})


myServer.listen(8000, () => console.log("Server Started"))