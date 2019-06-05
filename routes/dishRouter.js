const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router()

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send you details of the all dishes');
})
.post((req, res, next) => {
    res.end('the entered dish is:' + req.body.name + ' and its description is : ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('no put function');
})
.delete((req, res, next) => {
    res.end('this data will be deleted soon');
})

dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send you the detailes of: ' + req.params.dishId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('no post functions here')
})
.put((req, res, next) => {
    res.write('updating the dishes' + req.params.dishId +' \n');
    res.end('will update the dish:' + req.body.name + 'with details:' + req.body.description);
})
.delete((req, res, next) => {
    res.end('deleting the dish: '+ req.params.dishId)
});

module.exports = dishRouter;

