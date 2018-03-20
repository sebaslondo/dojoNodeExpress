const express = require('express');
const router = express.Router();

// requiring the model
const User = require('../models/User');

router.get('/users', (req, res, next) => {
  // User.find({}).then((users) => {
  //   res.send(users);
  // });
  console.log(parseFloat(req.query.lng));
  User.geoNear(
    {
      type: 'Point',
      coordinates: [
        parseFloat(req.query.lng),
        parseFloat(req.query.lat)
      ],
    },
    {maxDistance: 100000, spherical: true}
  )
  .then(users => res.send(users))
  .catch(next);
});

router.post('/users', (req, res, next) => {
  // var user = new User(req.body);
  // user.save();
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(next);;
});

router.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate({
    _id: req.params.id
  }, req.body)
  .then(() => {
    User.findOne({_id: req.params.id})
      .then((user) => res.send(user));
  })
  .catch((next));
});

router.delete('/users/:id', (req, res, next) => {
  User.findByIdAndRemove({_id: req.params.id})
    .then((user) => res.send(user))
    .catch(next);
});

module.exports = router;
