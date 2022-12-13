const express = require('express')
const bodyParser = require('body-parser')


const dishRouter = express.Router();
dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all(function(req, res, next){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();

})
.get(function(req, res, next){
    res.end('Sending all dishes');
})

.post((req,  res, next)=>{
    res.end('Posting dish '  + req.body.name + 'with desc' + req.body.des)
})
.put((req,  res, next)=>{
    res.end('Not supported')
})
.delete((req,  res, next)=>{
    res.end('Deleting dishes') 
})
dishRouter.route('/:dishid')
.get((req, res, next)=>{
    res.end('Sending details of dish '+ req.params.dishid + ' to you '+ '\n' + 'With name: ' + req.body.name+ '\n'+'Descritpion: ' + req.body.des);
})

.post( (req,  res, next)=>{
    res.end('Post not supported on this endpoint')
})

.put( (req,  res, next)=>{
    
    res.write('Updating dish: ' + req.params.dishid + '\n')
    res.end("Will update dish: " + req.body.name + '\n' +'Description' + req.body.des) 
})

.delete((req,  res, next)=>{
    res.end('Deleting dish no. ' + req.params.dishid) 
})
module.exports = dishRouter;
