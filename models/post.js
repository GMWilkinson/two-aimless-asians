const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: false},
  dualAuthor: {type: Boolean, required: false, select: false},
  postImage: {type: String, required: false},
  blurb: {type: String, required: false},
  paragraph: [{
    text: String,
    image: String
  }],
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Post', postSchema)
