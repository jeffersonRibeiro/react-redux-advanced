const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Define our model */
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true
  },
  password: String
});

/* Create the model class */
const modelClass = mongoose.model('user', userSchema);

/* Export the model */
module.exports = modelClass;
