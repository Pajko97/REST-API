const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/players', function(req, res, next) {

    Ninja.aggregate().near({ 
        near: 
        {
         'type': "Point",
          'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)] }, 
          maxDistance: 100000, 
          spherical: true, 
          distanceField: "dis" 
         }
         ).then(function(ninjas){
            console.log(ninjas);
            res.send(ninjas);
          })
          .catch((error) => console.log(error));
      });

router.post('/players', function(req, res, next) {
    Ninja.create(req.body).then((player) => {
        res.send(player);
    }).catch(next);

});

router.put('/players/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then((player) => {
            res.send(player);
        })
    });
});

router.delete('/players/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id})
    res.send({type: 'DELETE'})
});

module.exports = router;