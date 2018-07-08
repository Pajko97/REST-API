const express = require('express');
const router = express.Router();
const Ninja = require('../models/User');

router.get('/Players', function(req, res, next) {
    Ninja.find({}).then((players) => {
        res.send(players);
    })
});
router.post('/Players', function(req, res, next) {
    Ninja.create(req.body).then((player) => {
        res.send(player);
    }).catch(next);

});

router.put('/Players/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then((player) => {
            res.send(player);
        })
    });
});

router.delete('/Players/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id})
    res.send({type: 'DELETE'})
});

module.exports = router;