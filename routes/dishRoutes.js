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
    res.end('Getting all dishes');
})

.post((req,  res, next)=>{
    res.end('Posting Dish: '  + req.body.name + '\n' + ' Decription: ' + req.body.description)
})
.put((req,  res, next)=>{
    res.end('PUT operation not supported on /dishes')
})
.delete((req,  res, next)=>{
    res.end('Deleting all Dishes..') 
})
dishRouter.route('/:dishid')
.get((req, res, next)=>{
    res.end('Sending details of dish '+ req.params.dishid + ' to you.');
})

.post( (req,  res, next)=>{
    res.end('POST operation not supported on dishes/' + req.params.dishid)
})

.put( (req,  res, next)=>{
    
    res.write('Updating dish: ' + req.params.dishid + '\n')
    res.end("Will update dish: " + req.body.name + '\n' +'Description: ' + req.body.description) 
})

.delete((req,  res, next)=>{
    res.end('Deleting dish no: ' + req.params.dishid) 
})
module.exports = dishRouter;
