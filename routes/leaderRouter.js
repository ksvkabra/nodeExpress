const express = require('express');
const bodyParser = require('body-parser')

const leaderRouter = express.Router()

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send you details of the all leaders');
})
.post((req, res, next) => {
    res.end('the entered leader is:' + req.body.name + ' and its description is : ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('no put function');
})
.delete((req, res, next) => {
    res.end('this data will be deleted soon');
})

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send you the details of: ' + req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('no post functions here')
})
.put((req, res, next) => {
    res.write('updating the leaders' + req.params.leaderId +' \n');
    res.end('will update the leader:' + req.body.name + 'with details:' + req.body.description);
})
.delete((req, res, next) => {
    res.end('deleting the leader: '+ req.params.leaderId)
});

module.exports = leaderRouter;