const { log } = require('console');
const http = require('http');
const myserver = http.createServer((req,res) => {
    console.log("Welcome to my server...");
    res.end("Hello from server..");
})
myserver.listen(8000, ()=>console.log("server started..."));