const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Post = require('../models/post')
const User = require('../models/user')

const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2'
]
const userData = [{
  _id: userIds[0],
  username: 'Coco',
  email: 'c@c',
  password: 'CocoAusCtina'
}, {
  _id: userIds[1],
  username: 'Rice',
  email: 'r@r',
  password: 'RiceEngChristmas'
}]

const postIds = [
  '5be9860fcb16d525543beda1',
  '5be9860fcb16d525543beda2',
  '5be9860fcb16d525543beda3',
  '5be9860fcb16d525543beda4'
]

const postData = [{
  _id: postIds[0],
  title: 'Hello World',
  author: 'Coco & Rice',
  blurb: 'This is a test post',
  image: '',
  paragraph: [
    {text: 'Rice: Hello! My friend Coco and I met through a mutual friend four years ago when I first moved to London. We are both self help junkies and this blog, Two Aimless Asians, is a place for us to discuss our meandering journeys through our 30s!'},
    {text: 'Coco: Hi there readers (who am I kidding, family and friends), welcome to the days our lives. Our Aimless Asian lives. Hopefully though, through our meandering we will find everything we’ve ever dreamed of. Not setting the bar too high or anything, we are nothing if not realistic.'},
    {text: 'Rice: Don\'t worry, it\'s not going to be a daily account of what we ate, what we did and what we wore (that\'s what Instagram is for)! But Coco and I have been talking a lot about the overall shape of our lives, trying to figure out what having a good life means to us and so this blog is a good way to explore that.'},
    {text: 'Coco: Agreed. I would also add navigating relationships, finding purpose in the everyday and learning what we truly want which up until now, has eluded me somewhat. Most of all though, hopefully we have some interesting stories to share!  '},
    {text: 'Rice: Yup, I don\'t really know what I want either! I have a much better idea of what I don\'t want. From a lot of conversations I\'ve had with friends and acquaintances, I think that\'s quite common. And sharing is caring, so maybe our stories will help you! Or amuse you. Or amuse or help ourselves :) Happy reading!  '}
  ]
}, {
  _id: postIds[1],
  title: 'Test Post 2',
  author: userData[1].username,
  blurb: 'This is a test post',
  paragraph: [
    {text: 'blah blah blah'},
    {text: 'blah blah blah blah'},
    {text: 'blah blah blah blah blah'}
  ]
}]

mongoose.connect(dbURI)
Post.collection.drop()
User.collection.drop()

Post.create(postData)
  .then(posts => {
    console.log(`${posts.length} posts created`)
    return User.create(userData)
  })
  .then(users => {
    console.log(`${users.length} users created`)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
