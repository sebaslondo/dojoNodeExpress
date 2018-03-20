const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/people', {
  useMongoClient: true
});

const User = require('../models/User');

const users = [
  {
    "name": "Isaac",
    "nickname": "black belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80, 25.791]}
  }
,
  {
    "name": "Antonio",
    "nickname": "red belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80.245, 25.391]}
  }
,
  {
    "name": "Aaron",
    "nickname": "purple belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80.789, 25.701]}
  }
,
  {
    "name": "Joe",
    "nickname": "brown belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-81.1, 24.95]}
  }
,
  {
    "name": "Moxie",
    "nickname": "yellow belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80.750, 24.60]}
  }
,
  {
    "name": "Lao",
    "nickname": "no belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-81.500, 24.10]}
  }﻿
];

let done = 0;
for(let i = 0; i < users.length; i++) {
  let user = new User(users[i]);
  user.save((err, result) => {
    done++;
      if(done === users.length) {
        exit();
      }
  });
}

function exit() {
  mongoose.disconnect();
}
