const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', function(req, res, next) {

    Ninja.aggregate().near({ 
        near: 
        {
         'type': 'Point',
          'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)] }, 
          maxDistance: 100000, 
          spherical: true, 
          distanceField: "dis" 
         }
         ).then(function(ninjas){
            
            res.send(ninjas);
          });
      });

router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);

});

router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then((ninja) => {
            res.send(ninja);
        })
    });
});

router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id})
    res.send({type: 'DELETE'})
});

module.exports = router;