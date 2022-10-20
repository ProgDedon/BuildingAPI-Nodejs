const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
    res.end('Here is the History you are looking for');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find the page you are looking for </p>
    <a href="/">Back to Home</a>
    
    `)

})

server.listen(5000)