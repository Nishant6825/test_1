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
    res.end('PUT operation not supported on /promotions')
})
.delete((req,  res, next)=>{
    res.end('Deleting All Promotions...') 
})

promoRouter.route('/:promoid')
.get((req, res, next)=>{
    res.end('Sending details of promotion '+ req.params.promoid + ' to you.');
})

.post( (req,  res, next)=>{
    res.end('POST operation not supported on promotions/' + req.params.promoid)
})

.put( (req,  res, next)=>{
    
    res.write('Updating promotion: ' + req.params.promoid + '\n')
    res.end("Will update Promotion: " + req.body.name + '\n' +'Description: ' + req.body.description) 
})

.delete((req,  res, next)=>{
    res.end('Deleting Promotion: ' + req.params.promoid) 
})
module.exports = promoRouter;


