const Post = require('../models/post')

function indexRoute(req, res, next) {
  Post.find({ post: req.params.postId})
    .then(posts => res.json(posts))
    .catch(next)
}
function creatingIndexRoute(req, res, next) {
  Post.find({ post: req.params.postId})
    .then(posts => res.json(posts))
    .catch(next)
}
function showRoute(req, res, next) {
  Post.findById(req.params.postId)
    .then(post => res.json(post))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Post.findByIdAndDelete(req.params.postId)
    .then(() => res.sendStatus(204))
    .catch(next)
}

function createRoute(req, res, next) {
  Post.create(req.body)
    .then(post => res.status(201).json(post))
    .catch(next)
}

function sectionCreateRoute(req, res, next) {
  Post.findById(req.params.postId)
    .then(post => {
      post.paragraph.push(req.body)
      return post.save()
    })
    .then(post => res.json(post))
    .catch(next)
}

function updateRoute(req, res, next) {
  Post.findById(req.params.postId)
    .then(page => page.set(req.body))
    .then(page => page.save())
    .then(post => res.json(post))
    .catch(next)
}

module.exports ={
  index: indexRoute,
  creatingIndex: creatingIndexRoute,
  delete: deleteRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  sectionCreate: sectionCreateRoute
}
