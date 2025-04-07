import http from 'http';
const port= 3000;
const server = http.createServer((req,res)=>{  // creating server using the http module
    console.log(req.url);
    res.statusCode=200
})

server.listen(port,()=>{  // every created server needs to be listened on some port
    console.log('server started succesffully')
})