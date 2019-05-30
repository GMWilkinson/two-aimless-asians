const router = require('express').Router()
const posts = require('../controllers/posts')
const users = require('../controllers/users')
const auth = require('../controllers/auth')

router.route('/posts')
  .get(posts.index)
  .post(posts.create)

router.route('/posts/:postId')
  .get(posts.show)
  .put(posts.update)
  .delete(posts.delete)

router.route('/users')
  .get(users.index)

router.post('/register', auth.register)
router.post('/login', auth.login)

module.exports = router
