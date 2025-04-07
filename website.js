// create a server

import http from 'http';
import fs from 'fs';

const port = 4444;

const webserver = http.createServer((req, res)=>{
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');

    if( req.url == '/'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html');
        res.end( data );
    }
    else if ( req.url == '/hello'){
        res.statusCode=200;
        res.end(`<h1> Hello website at home </h1>`)
    }
    else if ( req.url == '/about'){

        res.end( '<h1> at about page </h1> <p> this is about page</p>')
        res.statusCode=200;
    }else {
        res.statusCode=404;
        res.end( '<h1> 404 Page not found </h1>')
    }

})

webserver.listen(port, ()=>{
    console.log( ' webserver started successfully ')
})