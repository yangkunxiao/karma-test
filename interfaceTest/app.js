const express = require('express');


const server = express();

server.get('/', (req,res) => {
    res.status(200);
    // res.status(404);
    res.end('hello kaka')
})



// server.listen(3000,() => {
//     console.log('server is running at http://localhost:3000')
// })

module.exports = server;