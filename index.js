const express = require('express');
const http  = require('http');
const hostname= 'localhost';
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 4000;

const app =express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.all('/dishes', (req, res, next)=>{
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   next();
});

app.get('/dishes', (req, res, next)=>{
    res.end('Return name of dishes');
})

app.post('/dishes', (req,  res, next)=>{
    res.end('Name of Dish: ' + req.body.name + '\n' +'With description: ' + req.body.des)
})

app.put('/dishes', (req,  res, next)=>{
    res.statusCode = 403
    res.end('put Operation not supported on endpoint')
})

app.delete('/dishes', (req,  res, next)=>{
    res.end('Deleting all data')
})

app.get('/dishes/:dishid', (req, res, next)=>{
    res.end('Sending details of dish '+ req.params.dishid + 'to you'+ '\n' + 'With name: ' + req.body.name+ '\n'+'Descritpion: ' + req.body.des);
})

app.post('/dishes', (req,  res, next)=>{
    res.end('Post not supported on this endpoint - /dishes/' + req.params.dishid)
})

app.put('/dishes/:dishid', (req,  res, next)=>{
    
    res.write('Updating dish: ' + req.params.dishid + '\n')
    res.end("Will update dish: " + req.body.name + '\n' +'Description' + req.body.des) 
})

app.delete('/dishes/:dishid', (req,  res, next)=>{
    res.end('Deleting dish no. ' + req.params.dishid) 
})

app.use(express.static(__dirname + '/public'))

app.use((req, res, next)=>{
    // console.log(req.headers);

    res.statusCode =200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is Express Server</h1></body></html>')

})
const server = http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`Running on http://${hostname}:${port}`)
})

 

