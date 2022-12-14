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
    res.end('Not supported on this Route..')
})
.delete((req,  res, next)=>{
    res.end('Deleting all Dishes..') 
})
dishRouter.route('/:dishid')
.get((req, res, next)=>{
    res.end('Sending details of dish '+ req.params.dishid + ' to you '+ '\n' + 'With name: ' + req.body.name+ '\n'+'Descritpion: ' + req.body.description);
})

.post( (req,  res, next)=>{
    res.end('Post not supported on this endpoint')
})

.put( (req,  res, next)=>{
    
    res.write('Updating dish: ' + req.params.dishid + '\n')
    res.end("Will update dish: " + req.body.name + '\n' +'Description' + req.body.description) 
})

.delete((req,  res, next)=>{
    res.end('Deleting dish no. ' + req.params.dishid) 
})
module.exports = dishRouter;
