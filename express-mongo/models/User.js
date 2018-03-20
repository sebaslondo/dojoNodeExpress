const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  nickname: {
    type: String,
    required: [true, 'nickname is required']
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

// the db plurilize the name user
const User = mongoose.model('user', UserSchema);

module.exports = User;
