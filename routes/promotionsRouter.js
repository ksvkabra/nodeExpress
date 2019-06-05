const express = require('express');
const bodyParser = require('body-parser')

const promotionRouter = express.Router()

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send you details of the all promotions');
})
.post((req, res, next) => {
    res.end('the entered promotion is:' + req.body.name + ' and its description is : ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('no put function');
})
.delete((req, res, next) => {
    res.end('this data will be deleted soon');
})

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send you the details of: ' + req.params.promotionId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('no post functions here')
})
.put((req, res, next) => {
    res.write('updating the promotions' + req.params.promotionId +' \n');
    res.end('will update the promotion:' + req.body.name + 'with details:' + req.body.description);
})
.delete((req, res, next) => {
    res.end('deleting the promotion: '+ req.params.promotionId)
});

module.exports = promotionRouter;