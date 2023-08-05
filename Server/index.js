const express = require('express');
const app = express();
app.get('/',(req,res) => {
    return res.send('Hello world!');
})
app.listen(8000,()=>{
    console.log("Server Started");
})
























// const express = require('express');
// const app = express();
// const port = 8000
// app.get('/', (req,res)=> {
//     res.send("Hello World!");
// })

// app.listen(port,()=> {
//     console.log(`Example app listening on port ${port}`)
// })





// const express = require('express');
// const http = require('http');

// const app = express();
// app.get('/', (req,res) => {
//     return res.send("Hello from Home Page...");
// });

// app.get('/about', (req,res) => {
//     return res.send('Hello from Prathamesh Patil..  ' + 'hey ' + req.query.name + ' Your Id = ' + req.query.id);
// })
// app.listen(8000,()=>console.log("server started"))
// // const myserver = http.createServer(app);
// // myserver.listen(8000,()=>console.log("server started"));