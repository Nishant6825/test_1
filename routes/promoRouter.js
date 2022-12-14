const express = require('express')
const bodyParser = require('body-parser')


const promoRouter = express.Router();
promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all(function(req, res, next){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();

})
.get(function(req, res, next){
    res.end('Getting all Promotions');
})

.post((req,  res, next)=>{
    res.end('Posting the promotion with name: '  + req.body.name + '\n' +'Description: ' + req.body.description)
})
.put((req,  res, next)=>{
    res.end('Not supported at this endpoint..')
})
.delete((req,  res, next)=>{
    res.end('Deleting All Promotions...') 
})

promoRouter.route('/:promoid')
.get((req, res, next)=>{
    res.end('Sending details of dish '+ req.params.promoid + ' to you '+ '\n' + 'With name: ' + req.body.name+ '\n'+'Descritpion: ' + req.body.description);
})

.post( (req,  res, next)=>{
    res.end('Post not supported on this endpoint')
})

.put( (req,  res, next)=>{
    
    res.write('Updating promotion: ' + req.params.promoid + '\n')
    res.end("Will update Promotion: " + req.body.name + '\n' +'Description' + req.body.description) 
})

.delete((req,  res, next)=>{
    res.end('Deleting Promotion no. ' + req.params.promoid) 
})
module.exports = promoRouter;


