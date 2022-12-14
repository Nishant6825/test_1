const express = require('express')
const bodyParser = require('body-parser')


const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.all(function(req, res, next){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();

})
.get(function(req, res, next){
    res.end('Getting all Leaders..');
})

.post((req,  res, next)=>{
    res.end('Posting the promotion with name: '  + req.body.name + '\n' +'Description: ' + req.body.description)
})
.put((req,  res, next)=>{
    res.end('PUT operation not supported on /leaders')
})
.delete((req,  res, next)=>{
    res.end('Deleting All Leaders...') 
})

leaderRouter.route('/:leaderid')
.get((req, res, next)=>{
    res.end('Sending details of leader '+ req.params.leaderid + ' to you.');
})

.post( (req,  res, next)=>{
    res.end('POST operation not supported on leaders/' + req.params.leaderid)
})

.put( (req,  res, next)=>{
    
    res.write('Updating leader: ' + req.params.leaderid + '\n')
    res.end("Will update leader: " + req.body.name + '\n' +'Description: ' + req.body.description) 
})

.delete((req,  res, next)=>{
    res.end('Deleting leader: ' + req.params.leaderid) 
})
module.exports = leaderRouter;


